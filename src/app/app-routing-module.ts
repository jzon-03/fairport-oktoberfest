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
      { path: 'home', component: HomeComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'entertainment', component: EntertainmentComponent },
      { path: 'food-drink', component: FoodDrinkComponent },
      { path: 'vendors', component: VendorsComponent },
      { path: 'activities', component: ActivitiesComponent },
      { path: 'about', component: AboutComponent },
      { path: 'location', component: LocationComponent },
      { path: 'sponsors', component: SponsorsComponent },
      { path: 'volunteer', component: VolunteerComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'contact', component: ContactComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
