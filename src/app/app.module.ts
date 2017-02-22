import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// routes
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { CalendarComponent } from '././components/calendar.component';
import { TeamComponent } from '././components/teams.component';
import { RiderComponent } from '././components/riders.component';
import { EventComponent } from '././components/event-detail.component';

//services
import { EventService } from './services/event.service';
import { TeamService } from './services/team.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    CalendarComponent,
    TeamComponent,
    RiderComponent,
    EventComponent
  ],
  providers: [
    EventService,
    TeamService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}