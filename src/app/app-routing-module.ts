import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { FoodDrinkComponent } from './components/food-drink/food-drink.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { AboutComponent } from './components/about/about.component';
import { LocationComponent } from './components/location/location.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { RootComponent } from './components/root/root.component';

const routes: Routes = [
  {
    path: '', component: RootComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,
        data: {
          seoTitle: 'Home',
          seoDescription: 'Fairport Oktoberfest festival details, highlights, and visitor info for this year\'s celebration.',
        },
      },
      {
        path: 'schedule',
        component: ScheduleComponent,
        data: {
          seoTitle: 'Schedule',
          seoDescription: 'View the official Fairport Oktoberfest schedule with dates, admission windows, and featured events.',
        },
      },
      {
        path: 'entertainment',
        component: EntertainmentComponent,
        data: {
          seoTitle: 'Entertainment',
          seoDescription: 'Explore Fairport Oktoberfest entertainment including live music, featured acts, and daily performances.',
        },
      },
      {
        path: 'food-drink',
        component: FoodDrinkComponent,
        data: {
          seoTitle: 'Food and Drink',
          seoDescription: 'Discover food vendors, classic German favorites, desserts, and beverage highlights at Fairport Oktoberfest.',
        },
      },
      {
        path: 'vendors',
        component: VendorsComponent,
        data: {
          seoTitle: 'Vendors',
          seoDescription: 'Browse Fairport Oktoberfest vendors including food partners, local makers, and community booths.',
        },
      },
      {
        path: 'activities',
        component: ActivitiesComponent,
        data: {
          seoTitle: 'Activities',
          seoDescription: 'Find family-friendly activities, traditional games, and festival fun across the Oktoberfest grounds.',
        },
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          seoTitle: 'About',
          seoDescription: 'Learn about Fairport Oktoberfest history, mission, and the community groups behind the event.',
        },
      },
      {
        path: 'location',
        component: LocationComponent,
        data: {
          seoTitle: 'Location',
          seoDescription: 'Get Fairport Oktoberfest location details, address, and parking guidance for the festival weekend.',
        },
      },
      {
        path: 'sponsors',
        component: SponsorsComponent,
        data: {
          seoTitle: 'Sponsors',
          seoDescription: 'Meet the Fairport Oktoberfest sponsors and community partners supporting the festival.',
        },
      },
      {
        path: 'volunteer',
        component: VolunteerComponent,
        data: {
          seoTitle: 'Volunteer',
          seoDescription: 'Learn how to volunteer at Fairport Oktoberfest and support operations throughout the festival weekend.',
        },
      },
      {
        path: 'gallery',
        component: GalleryComponent,
        data: {
          seoTitle: 'Gallery',
          seoDescription: 'See Fairport Oktoberfest gallery highlights featuring festival moments, music, food, and community.',
        },
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          seoTitle: 'Contact',
          seoDescription: 'Contact Fairport Oktoberfest organizers for event questions, volunteer opportunities, and partner inquiries.',
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
