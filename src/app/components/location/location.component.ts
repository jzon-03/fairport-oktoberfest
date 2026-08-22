import { Component } from '@angular/core';

type LocationTip = {
  title: string;
  detail: string;
};

@Component({
  selector: 'app-location',
  standalone: false,
  templateUrl: './location.component.html',
  styleUrl: './location.component.css',
})
export class LocationComponent {
  protected readonly venueName = 'Fairport Junction Festival Site';
  protected readonly venueAddress = '9 Liftbridge Lane East, Fairport, NY 14450';
  protected readonly parkingUrl = 'https://www.village.fairport.ny.us/community/parking_information.php';

  protected readonly tips: LocationTip[] = [
    {
      title: 'Parking Guidance',
      detail: 'Use designated village lots and follow event-day signage for overflow areas.',
    },
    {
      title: 'Arrival Timing',
      detail: 'Arrive early for easiest parking access and shorter entry lines.',
    },
    {
      title: 'Accessibility',
      detail: 'Main pathways are waterfront-adjacent and event staff can assist with directions.',
    },
  ];

}
