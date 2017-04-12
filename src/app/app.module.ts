import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// custom modules
import { AppFirebaseModule } from './app-firebase.module';

// routes
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { CalendarComponent } from '././components/calendar.component';
import { TeamComponent } from '././components/teams.component';
import { RiderComponent } from '././components/riders.component';
import { EventComponent } from '././components/event.component';
import { ResultsComponent } from '././components/results.component';

// services
import { EventService } from './services/event.service';
import { TeamService } from './services/team.service';
import { RiderService } from './services/rider.service';
import { ResultService } from './services/result.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppFirebaseModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    CalendarComponent,
    TeamComponent,
    RiderComponent,
    EventComponent,
    ResultsComponent
  ],
  providers: [
    EventService,
    TeamService,
    RiderService,
    ResultService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}