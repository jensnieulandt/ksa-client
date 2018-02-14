import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SiteComponent} from './site/site.component';
import {CmsComponent} from './cms/cms.component';
import {EventsComponent} from './events/events.component';
import {MembersComponent} from './members/members.component';
import {UsersComponent} from './users/users.component';
import {HomeComponent} from './site/home/home.component';
import {GroupsComponent} from './groups/groups.component';
import {RentalsComponent} from './rentals/rentals.component';
import {ContactComponent} from './contact/contact.component';
import {NewEventComponent} from './events/new-event/new-event.component';
import {EditEventComponent} from './events/edit-event/edit-event.component';
import {PageNotFoundComponent} from './page-not-found-component';
import {AuthGuardService} from './auth-guard.service';
import {SigninComponent} from './signin/signin.component';
import {ScheduleComponent} from './site/schedule/schedule.component';

const APP_ROUTES: Routes = [
  {
    path: '', component: SiteComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'inschrijven', component: GroupsComponent},
      {path: 'planning', component: ScheduleComponent},
      {path: 'verhuur', component: RentalsComponent},
      {path: 'contact', component: ContactComponent},
    ]
  },
  {
    path: 'admin', component: CmsComponent,
    children: [
      {path: 'login', component: SigninComponent},
      {path: '', component: EventsComponent, canActivate: [AuthGuardService]},
      {path: 'activiteiten/nieuw', component: NewEventComponent, canActivate: [AuthGuardService]},
      {path: 'activiteiten/:id/bewerk', component: EditEventComponent, canActivate: [AuthGuardService]},
      {path: 'leiding', component: UsersComponent, canActivate: [AuthGuardService], data: {requiresAdmin: true}},
      {path: 'leden', component: MembersComponent, canActivate: [AuthGuardService]},
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
