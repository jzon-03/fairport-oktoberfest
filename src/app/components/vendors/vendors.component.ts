import { Component } from '@angular/core';

type Vendor = {
  name: string;
  type: string;
  description: string;
  area: string;
};

type VendorCategory = {
  title: string;
  subtitle: string;
  badge: string;
  vendors: Vendor[];
};

@Component({
  selector: 'app-vendors',
  standalone: false,
  templateUrl: './vendors.component.html',
  styleUrl: './vendors.component.css',
})
export class VendorsComponent {
  protected readonly categories: VendorCategory[] = [
    {
      title: 'Food Partners',
      subtitle: 'Festival favorites and local specialties',
      badge: 'Food',
      vendors: [
        {
          name: 'Swan Market',
          type: 'Traditional German Kitchen',
          description: 'Classic Oktoberfest dishes including bratwurst, schnitzel, and sides.',
          area: 'Food Court Tent',
        },
        {
          name: 'Red Osier Brands',
          type: 'Grill and Carved Favorites',
          description: 'Hearty festival plates and comfort-food staples for groups and families.',
          area: 'Canalfront Food Row',
        },
        {
          name: 'Helmut Strudel',
          type: 'Bakery and Desserts',
          description: 'Fresh strudels, sweet pastries, and seasonal baked treats.',
          area: 'Dessert Lane',
        },
        {
          name: "Salvatore's",
          type: 'Italian Festival Options',
          description: 'Additional crowd-pleasing options including pizza and quick family meals.',
          area: 'Main Service Court',
        },
      ],
    },
    {
      title: 'Market Vendors',
      subtitle: 'Local makers and small businesses',
      badge: 'Shops',
      vendors: [
        {
          name: 'Canal Craft Collective',
          type: 'Handmade Goods',
          description: 'Woodwork, home decor, and artisan gifts from Rochester-area creators.',
          area: 'Vendor Village',
        },
        {
          name: 'Perinton Makers Guild',
          type: 'Community Artisans',
          description: 'Rotating booths featuring handcrafted products and seasonal keepsakes.',
          area: 'Village Marketplace',
        },
        {
          name: 'Waterfront Boutique Row',
          type: 'Lifestyle and Apparel',
          description: 'Festival apparel, accessories, and local boutique selections.',
          area: 'Canal Walkway',
        },
      ],
    },
    {
      title: 'Community Booths',
      subtitle: 'Local organizations and festival hosts',
      badge: 'Community',
      vendors: [
        {
          name: 'German Federation Games',
          type: 'Tradition and Activities',
          description: 'Traditional beer slide and hammer game hosted throughout the weekend.',
          area: 'Activity Zone',
        },
        {
          name: 'Fairport Partnership Team',
          type: 'Event Information',
          description: 'Volunteer sign-ups, program guides, and sponsor acknowledgements.',
          area: 'Welcome Tent',
        },
        {
          name: 'Festival Support Partners',
          type: 'Community Support',
          description: 'Partner organizations sharing updates and community resources.',
          area: 'Partner Pavilion',
        },
      ],
    },
  ];

  protected readonly vendorNote =
    'Vendor participation and booth locations may update before opening day. Check back for final map placement.';
}
