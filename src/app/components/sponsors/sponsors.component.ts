import { Component } from '@angular/core';

type SponsorTier = {
  tier: string;
  description: string;
  organizations: string[];
};

@Component({
  selector: 'app-sponsors',
  standalone: false,
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.css',
})
export class SponsorsComponent {
  protected readonly tiers: SponsorTier[] = [
    {
      tier: 'Presenting Support',
      description: 'Core organizations helping power the festival weekend.',
      organizations: [
        'Fairport Partnership for a Better Community',
        'Fairport Perinton Partnership 501(c)(3)',
      ],
    },
    {
      tier: 'Community Partners',
      description: 'Long-time supporters and local organizations.',
      organizations: [
        'Flower City Fairport Masonic Lodge',
        'Perinton Memorial VFW Post 8495',
        'Fairport Perinton Merchants Association',
        'Federation of German American Societies',
      ],
    },
    {
      tier: 'Festival Friends',
      description: 'Additional local businesses and volunteers backing event operations.',
      organizations: ['Local sponsors, vendors, and neighborhood supporters'],
    },
  ];

}
