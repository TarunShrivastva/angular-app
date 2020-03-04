import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './route';
import { Error404Component } from './errors/404.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';

// import { EventsListComponent } from './events/event-list.component';
// import { EventThumbnailComponent } from './events/event-thumbnail.component';
// import { EventService } from './events/shared/event.service';
// import { CreateEventComponent } from './events/shared/create-event.component';
// import { EventListResolver } from './events/events-list-resolver.service';
// import { AppRoutingModule } from './app-routing.module';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  CreateEventComponent,
  EventListResolver
} from './events/index'

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    { 
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [
    EventsAppComponent
  ]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')    
  return true
}