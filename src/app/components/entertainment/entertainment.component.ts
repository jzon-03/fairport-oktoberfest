import { Component } from '@angular/core';

type FeaturedAct = {
  name: string;
  subtitle: string;
  description: string;
  link: string;
  cta: string;
};

type PerformanceSlot = {
  time: string;
  act: string;
  stage: string;
  details: string;
};

type EntertainmentDay = {
  day: string;
  date: string;
  vibe: string;
  slots: PerformanceSlot[];
};

@Component({
  selector: 'app-entertainment',
  standalone: false,
  templateUrl: './entertainment.component.html',
  styleUrl: './entertainment.component.css',
})
export class EntertainmentComponent {
  protected readonly featuredActs: FeaturedAct[] = [
    {
      name: 'BB Dang',
      subtitle: 'Rochester Party Favorites',
      description: 'High-energy setlists mixing classic rock, dance, and crowd-favorite singalongs.',
      link: 'https://www.facebook.com/bbdangband/',
      cta: 'Visit BB Dang',
    },
    {
      name: 'Northside Johnny',
      subtitle: 'Local Live Music Mainstay',
      description: 'Festival-ready covers and upbeat stage presence to keep the big tent moving.',
      link: 'https://www.facebook.com/profile.php?id=100034707957006',
      cta: 'Visit Northside Johnny',
    },
    {
      name: 'Tryst',
      subtitle: 'Saturday Night Headliner',
      description: 'A polished live show closing out the weekend with a high-energy finale performance.',
      link: 'https://www.facebook.com/trystband',
      cta: 'Visit Tryst',
    },
  ];

  protected readonly entertainmentDays: EntertainmentDay[] = [
    {
      day: 'Thursday',
      date: 'September 24',
      vibe: 'Kickoff Night',
      slots: [
        {
          time: '5:30 PM',
          act: 'Opening Big Tent Set',
          stage: 'Main Entertainment Stage',
          details: 'Traditional favorites and upbeat crowd warm-up performances.',
        },
        {
          time: '7:30 PM',
          act: 'Polka & Dance Block',
          stage: 'Beer Hall Tent',
          details: 'Classic Oktoberfest sounds with room for all-ages dancing.',
        },
        {
          time: '9:00 PM',
          act: 'Canalfront Night Session',
          stage: 'Main Entertainment Stage',
          details: 'Community-focused evening entertainment to close opening night.',
        },
      ],
    },
    {
      day: 'Friday',
      date: 'September 25',
      vibe: 'Tradition + ROCtoberfest',
      slots: [
        {
          time: '7:00 PM',
          act: 'Traditional Einsmarch Ceremony',
          stage: 'Main Stage',
          details: 'Festival opening tradition and ceremonial start to Friday night.',
        },
        {
          time: '8:00 PM',
          act: 'Northside Johnny',
          stage: 'Main Entertainment Stage',
          details: 'Live evening set of recognizable crowd favorites.',
        },
        {
          time: '9:30 PM',
          act: 'BB Dang',
          stage: 'Main Entertainment Stage',
          details: 'Late-night energy set blending rock and dance floor staples.',
        },
      ],
    },
    {
      day: 'Saturday',
      date: 'September 26',
      vibe: 'Finale Night',
      slots: [
        {
          time: '3:00 PM',
          act: 'Family Stage Showcase',
          stage: 'Community Stage',
          details: 'All-ages entertainment and audience participation segments.',
        },
        {
          time: '6:30 PM',
          act: 'ROCtoberfest Spotlight',
          stage: 'Main Entertainment Stage',
          details: 'Featured local acts leading into the headliner performance.',
        },
        {
          time: '9:00 PM - 11:00 PM',
          act: 'Tryst',
          stage: 'Main Entertainment Stage',
          details: 'Saturday night headline set and festival weekend finale.',
        },
      ],
    },
  ];
}
