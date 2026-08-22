import { Component } from '@angular/core';

type MenuItem = {
  name: string;
  vendor: string;
  description: string;
  tag: string;
};

type BeverageItem = {
  name: string;
  style: string;
  details: string;
};

@Component({
  selector: 'app-food-drink',
  standalone: false,
  templateUrl: './food-drink.component.html',
  styleUrl: './food-drink.component.css',
})
export class FoodDrinkComponent {
  protected readonly featuredDishes: MenuItem[] = [
    {
      name: 'Bratwurst Plate',
      vendor: 'Swan Market',
      description: 'Traditional bratwurst with sauerkraut, mustard, and warm roll.',
      tag: 'Classic',
    },
    {
      name: 'Schnitzel Sandwich',
      vendor: 'Swan Market',
      description: 'Crispy cutlet, tangy slaw, and house sauce on fresh baked bread.',
      tag: 'Crowd Favorite',
    },
    {
      name: 'Carved Roast Combo',
      vendor: 'Red Osier Brands',
      description: 'Slow-roasted carving station plate with seasonal sides.',
      tag: 'Hearty',
    },
    {
      name: 'Apple Strudel',
      vendor: 'Helmut Strudel',
      description: 'Flaky pastry with cinnamon apple filling and powdered sugar.',
      tag: 'Dessert',
    },
    {
      name: 'Festival Slice & Bites',
      vendor: "Salvatore's",
      description: 'Quick and family-friendly options, including pizza and shareables.',
      tag: 'Family Pick',
    },
    {
      name: 'Soft Pretzel Basket',
      vendor: 'Beer Garden Snacks',
      description: 'Warm Bavarian-style pretzels served with cheese and mustard.',
      tag: 'Snacks',
    },
  ];

  protected readonly beverageHighlights: BeverageItem[] = [
    {
      name: 'Traditional Oktoberfest Bier',
      style: 'Seasonal Lager',
      details: 'Malty, smooth, and poured in festival servings at beer tents.',
    },
    {
      name: 'Craft Rotating Tap',
      style: 'Local Brewer Selection',
      details: 'Rotating options featuring regional breweries and guest pours.',
    },
    {
      name: 'Non-Alcoholic Refreshers',
      style: 'Family Friendly',
      details: 'Sodas, lemonades, bottled water, and specialty mocktail choices.',
    },
  ];

  protected readonly serviceNotes: string[] = [
    'Beer sales begin at Noon on Saturday.',
    'Lines move fastest during early afternoon hours.',
    'Menu availability can vary by day and sellout timing.',
    'Card and cash payment options are available at most booths.',
  ];

}
