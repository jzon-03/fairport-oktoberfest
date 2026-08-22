import { Component } from '@angular/core';

type ActivityBlock = {
  title: string;
  audience: string;
  description: string;
  time: string;
  location: string;
};

@Component({
  selector: 'app-activities',
  standalone: false,
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css',
})
export class ActivitiesComponent {
  protected readonly activityBlocks: ActivityBlock[] = [
    {
      title: 'Traditional Beer Slide',
      audience: 'All Ages',
      description: 'A fan-favorite challenge hosted by the German Federation.',
      time: 'Daily Afternoon Sessions',
      location: 'Activity Zone',
    },
    {
      title: 'Hammer Game',
      audience: 'Teens & Adults',
      description: 'Test your festival strength and accuracy with this Oktoberfest classic.',
      time: 'Throughout the Day',
      location: 'German Games Tent',
    },
    {
      title: 'Family Activity Lawn',
      audience: 'Kids & Families',
      description: 'Interactive games and open activities in a family-friendly environment.',
      time: 'Noon - 6:00 PM',
      location: 'Community Lawn',
    },
    {
      title: 'Dance Floor Sessions',
      audience: 'All Ages',
      description: 'Polka, social dancing, and group-friendly routines under the big tent.',
      time: 'Evening Hours',
      location: 'Main Entertainment Stage',
    },
  ];

}
