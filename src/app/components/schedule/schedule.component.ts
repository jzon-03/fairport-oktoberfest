import { Component } from '@angular/core';

type ScheduleItem = {
  time: string;
  title: string;
  location: string;
  details: string;
};

type FestivalDay = {
  dayLabel: string;
  dateLabel: string;
  theme: string;
  items: ScheduleItem[];
};

type AdmissionWindow = {
  dayLabel: string;
  hours: string;
  pricing: string;
  note?: string;
};

type FeaturedBand = {
  name: string;
  url: string;
};

@Component({
  selector: 'app-schedule',
  standalone: false,
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
})
export class ScheduleComponent {
  protected readonly eventName = 'Fairport Oktoberfest';
  protected readonly eventYear = '17th year';
  protected readonly eventDates = 'September 24 - 26, 2026';
  protected readonly locationName = 'Fairport Junction Festival Site';
  protected readonly locationAddress = '9 Liftbridge Lane East, Fairport, NY 14450';
  protected readonly advancePrice = '$8 advance purchase online';
  protected readonly parkingUrl = 'https://www.village.fairport.ny.us/community/parking_information.php';

  protected readonly admissionWindows: AdmissionWindow[] = [
    {
      dayLabel: 'Thursday, September 24',
      hours: '4:00 PM - 11:00 PM',
      pricing: 'Admission $10',
    },
    {
      dayLabel: 'Friday, September 25',
      hours: '12:00 PM - 11:00 PM',
      pricing: 'Admission $5 (Noon - 4:00 PM), then $10 (4:00 PM - 11:00 PM)',
    },
    {
      dayLabel: 'Saturday, September 26',
      hours: '10:00 AM - 11:00 PM',
      pricing: 'Free until 4:00 PM, then Admission $10',
      note: 'Beer sales begin at Noon',
    },
  ];

  protected readonly featuredBands: FeaturedBand[] = [
    {
      name: 'BB Dang',
      url: 'https://www.facebook.com/bbdangband/',
    },
    {
      name: 'Northside Johnny',
      url: 'https://www.facebook.com/profile.php?id=100034707957006',
    },
    {
      name: 'Tryst',
      url: 'https://www.facebook.com/trystband',
    },
  ];

  protected readonly fastFacts: string[] = [
    'Traditional Einsmarch Opening Ceremony Friday at 7:00 PM.',
    'Traditional beer slide and hammer game hosted by the German Federation.',
    'Featuring traditional Oktoberfest biers and assorted other beverages.',
    'Traditional German food favorites by Swan Market.',
    "Additional food options: Red Osier Brands, Helmut Strudel, and Salvatore's.",
    'Party under the beer hall tent or outdoors in the beer garden.',
    'Produced by Fairport Partnership for a Better Community with support from community partners.',
    'Hosted by the Fairport Perinton Partnership 501(c)(3).',
  ];

  protected readonly festivalDays: FestivalDay[] = [
    {
      dayLabel: 'Thursday',
      dateLabel: 'September 24',
      theme: 'Opening Night',
      items: [
        {
          time: '4:00 PM - 11:00 PM',
          title: 'Festival Open',
          location: 'Main Entrance',
          details: 'Admission $10 with access to food, bier, vendors, and entertainment.',
        },
        {
          time: 'Evening',
          title: 'Big Tent & Beer Garden Experience',
          location: 'Fairport Junction Grounds',
          details: 'Traditional music, dancing, and community fun on the canalfront.',
        },
      ],
    },
    {
      dayLabel: 'Friday',
      dateLabel: 'September 25',
      theme: 'Tradition + Live Entertainment',
      items: [
        {
          time: '12:00 PM - 4:00 PM',
          title: 'Festival Open (Afternoon Admission)',
          location: 'Main Entrance',
          details: 'Admission $5 during afternoon hours.',
        },
        {
          time: '4:00 PM - 11:00 PM',
          title: 'Festival Open (Evening Admission)',
          location: 'Main Entrance',
          details: 'Admission changes to $10 for evening programming.',
        },
        {
          time: '7:00 PM',
          title: 'Traditional Einsmarch Opening Ceremony',
          location: 'Main Stage',
          details: 'A signature Oktoberfest tradition celebrating heritage and community.',
        },
        {
          time: 'Evening',
          title: 'ROCtoberfest Live Sets',
          location: 'Big Tent',
          details: 'Local favorites perform throughout the evening.',
        },
      ],
    },
    {
      dayLabel: 'Saturday',
      dateLabel: 'September 26',
      theme: 'Finale Day',
      items: [
        {
          time: '10:00 AM - 11:00 PM',
          title: 'Festival Open',
          location: 'Fairport Junction Grounds',
          details: 'Free entry until 4:00 PM, then Admission $10 for the evening.',
        },
        {
          time: '12:00 PM',
          title: 'Beer Sales Begin',
          location: 'Beer Hall Tent + Beer Garden',
          details: 'Traditional Oktoberfest biers and assorted beverages available.',
        },
        {
          time: 'All Day',
          title: 'Food, Games, and German Traditions',
          location: 'Festival Grounds',
          details: 'Featuring Swan Market and additional local food partners.',
        },
        {
          time: '9:00 PM - 11:00 PM',
          title: 'Tryst Live Performance',
          location: 'Main Entertainment Stage',
          details: 'Saturday night headline set.',
        },
      ],
    },
  ];
}
