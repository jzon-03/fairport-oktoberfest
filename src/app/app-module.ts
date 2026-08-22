import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { BaseNavComponent } from './components/base-nav/base-nav.component';
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
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    App,
    BaseNavComponent,
    HomeComponent,
    ScheduleComponent,
    EntertainmentComponent,
    FoodDrinkComponent,
    VendorsComponent,
    ActivitiesComponent,
    AboutComponent,
    LocationComponent,
    SponsorsComponent,
    VolunteerComponent,
    GalleryComponent,
    ContactComponent,
    RootComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
