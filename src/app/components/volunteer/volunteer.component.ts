import { Component } from '@angular/core';

type VolunteerRole = {
  role: string;
  shift: string;
  summary: string;
};

@Component({
  selector: 'app-volunteer',
  standalone: false,
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.css',
})
export class VolunteerComponent {
  protected readonly roles: VolunteerRole[] = [
    {
      role: 'Welcome Team',
      shift: 'Entry + Information Booth',
      summary: 'Greet attendees, answer common questions, and help with program handouts.',
    },
    {
      role: 'Activity Support',
      shift: 'Family + Games Areas',
      summary: 'Assist with activity flow, queue organization, and participant guidance.',
    },
    {
      role: 'Vendor Coordination',
      shift: 'Food + Market Zones',
      summary: 'Support vendors with setup touchpoints and event logistics communication.',
    },
    {
      role: 'Evening Operations',
      shift: 'Main Stage + Beer Garden',
      summary: 'Help with wayfinding, crowd flow, and scheduled transitions.',
    },
  ];

}
