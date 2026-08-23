import { Component } from '@angular/core';

type Highlight = {
  title: string;
  description: string;
  route: string;
  cta: string;
  image: string;
  imageAlt: string;
};

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  protected readonly highlightCards: Highlight[] = [
    {
      title: 'Live Entertainment',
      description: 'Polka bands, local favorites, and family-friendly performances all weekend long.',
      route: '/entertainment',
      cta: 'See Entertainment',
      image: '/images/dress.png',
      imageAlt: 'Traditional festival dress illustration',
    },
    {
      title: 'German Food & Drinks',
      description: 'Bratwurst, pretzels, schnitzel, and seasonal craft beverages from regional partners.',
      route: '/food-drink',
      cta: 'Explore Menu',
      image: '/images/beer.png',
      imageAlt: 'Beer mug illustration',
    },
    {
      title: 'Plan Your Visit',
      description: 'Get parking details, venue maps, and schedules so your group can make the most of the day.',
      route: '/location',
      cta: 'Get Directions',
      image: '/images/hat.png',
      imageAlt: 'Traditional Oktoberfest hat illustration',
    },
  ];
}
