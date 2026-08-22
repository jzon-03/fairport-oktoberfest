import { Component } from '@angular/core';

type NavItem = {
  label: string;
  path: string;
  exact: boolean;
};

@Component({
  selector: 'app-base-nav',
  standalone: false,
  templateUrl: './base-nav.component.html',
  styleUrl: './base-nav.component.css',
})
export class BaseNavComponent {
  protected readonly navItems: NavItem[] = [
    { label: 'Home', path: '/home', exact: true },
    { label: 'Schedule', path: '/schedule', exact: false },
    { label: 'Entertainment', path: '/entertainment', exact: false },
    { label: 'Food & Drink', path: '/food-drink', exact: false },
    { label: 'Vendors', path: '/vendors', exact: false },
    { label: 'Activities', path: '/activities', exact: false },
    { label: 'About', path: '/about', exact: false },
    { label: 'Location', path: '/location', exact: false },
    { label: 'Sponsors', path: '/sponsors', exact: false },
    { label: 'Volunteer', path: '/volunteer', exact: false },
    { label: 'Gallery', path: '/gallery', exact: false },
    { label: 'Contact', path: '/contact', exact: false },
  ];

  protected isNavExpanded = false;

  protected toggleNav(): void {
    this.isNavExpanded = !this.isNavExpanded;
  }

  protected closeNav(): void {
    this.isNavExpanded = false;
  }
}
