import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// routes
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { CalendarComponent } from '././components/calendar.component';
import { TeamComponent } from '././components/teams.component';
import { RiderComponent } from '././components/riders.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CalendarComponent,
    TeamComponent,
    RiderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
