import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, startWith } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly siteName = 'Fairport Oktoberfest';
  private readonly siteUrl = 'https://fairportoktoberfest.thepracticalapps.com';
  private readonly defaultDescription =
    'Official Fairport Oktoberfest site with schedule, entertainment, food, activities, location details, and festival updates.';

  protected initialized = false;

  init(): void {
    if (this.initialized) {
      return;
    }

    this.initialized = true;

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        startWith(new NavigationEnd(0, this.router.url, this.router.url)),
      )
      .subscribe(() => this.applySeo());
  }

  private applySeo(): void {
    const activeRoute = this.getDeepestChild(this.activatedRoute);
    const routeData = activeRoute.snapshot.data as {
      seoTitle?: string;
      seoDescription?: string;
    };

    const pageTitle = routeData.seoTitle ? `${routeData.seoTitle} | ${this.siteName}` : this.siteName;
    const description = routeData.seoDescription ?? this.defaultDescription;
    const canonicalUrl = `${this.siteUrl}${this.normalizePath(this.router.url)}`;

    this.title.setTitle(pageTitle);

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });

    this.updateCanonicalTag(canonicalUrl);
  }

  private getDeepestChild(route: ActivatedRoute): ActivatedRoute {
    let current = route;
    while (current.firstChild) {
      current = current.firstChild;
    }
    return current;
  }

  private normalizePath(url: string): string {
    const [path] = url.split('?');
    const cleanPath = path && path !== '/' ? path : '/home';
    return cleanPath;
  }

  private updateCanonicalTag(url: string): void {
    let canonical = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', url);
  }
}