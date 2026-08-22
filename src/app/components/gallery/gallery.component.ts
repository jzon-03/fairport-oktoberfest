import { Component } from '@angular/core';

type GalleryTile = {
  title: string;
  caption: string;
  tint: string;
};

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  protected readonly tiles: GalleryTile[] = [
    {
      title: 'Big Tent Nights',
      caption: 'Live music, dancing, and evening festival energy.',
      tint: 'tile-a',
    },
    {
      title: 'Family Moments',
      caption: 'Games, activities, and all-ages fun around the grounds.',
      tint: 'tile-b',
    },
    {
      title: 'Food Favorites',
      caption: 'Bratwurst, pretzels, and classic Oktoberfest plates.',
      tint: 'tile-c',
    },
    {
      title: 'Waterfront Views',
      caption: 'Canal-side atmosphere in the heart of Fairport.',
      tint: 'tile-d',
    },
    {
      title: 'Community Pride',
      caption: 'Volunteers, partners, and guests making the weekend special.',
      tint: 'tile-e',
    },
    {
      title: 'ROCtoberfest Finale',
      caption: 'Local favorites closing out the weekend with energy.',
      tint: 'tile-f',
    },
  ];

}
