import { Component } from '@angular/core';

type AboutPoint = {
  title: string;
  description: string;
};

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  protected readonly story =
    'Fairport Oktoberfest brings neighbors, families, and visitors together for a weekend rooted in tradition, local culture, and waterfront celebration.';

  protected readonly aboutPoints: AboutPoint[] = [
    {
      title: 'A Community Tradition',
      description: 'Now in its 17th year, the festival celebrates German heritage while showcasing Fairport hospitality.',
    },
    {
      title: 'Family-Friendly Atmosphere',
      description: 'From daytime activities to evening entertainment, the grounds are designed for all ages.',
    },
    {
      title: 'Local Partnership',
      description: 'Produced by community organizations, volunteers, and local partners committed to Fairport.',
    },
  ];

}
