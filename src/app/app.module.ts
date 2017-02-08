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

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CalendarComponent,
    TeamComponent,
    RiderComponent,
    EventComponent
  ],
  providers: [
    EventService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}