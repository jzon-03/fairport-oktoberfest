import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

export interface NavItem {
  label: string;
  route: string;
  icon?: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  { label: 'Home', route: '/' },
  { label: 'Schedule', route: '/schedule' },
  { label: 'Entertainment', route: '/entertainment' },
  { label: 'Food & Drink', route: '/food-drink' },
  { label: 'Vendors', route: '/vendors' },
  { label: 'Activities', route: '/activities' },
  { label: 'About', route: '/about' },
  {
    label: 'More',
    route: '',
    children: [
      { label: 'Location', route: '/location' },
      { label: 'Sponsors', route: '/sponsors' },
      { label: 'Volunteer', route: '/volunteer' },
      { label: 'Gallery', route: '/gallery' },
      { label: 'Contact', route: '/contact' },
    ],
  },
];

@Component({
  selector: 'app-base-nav',
  standalone: false,
  templateUrl: './base-nav.component.html',
  styleUrl: './base-nav.component.css',
})
export class BaseNavComponent {
  private readonly router = inject(Router);

  protected readonly navItems = navItems;

  protected isNavExpanded = false;
  protected isMoreOpen = false;

  protected toggleNav(): void {
    this.isNavExpanded = !this.isNavExpanded;
    if (!this.isNavExpanded) {
      this.isMoreOpen = false;
    }
  }

  protected toggleMore(): void {
    this.isMoreOpen = !this.isMoreOpen;
  }

  protected closeNav(): void {
    this.isNavExpanded = false;
    this.isMoreOpen = false;
  }

  protected hasActiveChild(children: NavItem[]): boolean {
    const currentPath = this.router.url.split('?')[0];
    return children.some((child) => currentPath === child.route || currentPath.startsWith(`${child.route}/`));
  }
}
