import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EventComponent} from './events/event/event.component';
import {EventsComponent} from './events/events.component';
import {NewEventComponent} from './events/new-event/new-event.component';
import {routing} from './app.routing';
import {EventService} from './event.service';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {AuthService} from './auth.service';
import {SiteComponent} from './site/site.component';
import {HomeComponent} from './site/home/home.component';
import {CmsComponent} from './cms/cms.component';
import {HeaderComponent} from './site/header/header.component';
import {AdminNavigationComponent} from './cms/admin-navigation/admin-navigation.component';
import {UsersComponent} from './users/users.component';
import {MembersComponent} from './members/members.component';
import {GroupsComponent} from './groups/groups.component';
import {RentalsComponent} from './rentals/rentals.component';
import {ContactComponent} from './contact/contact.component';
import {FooterComponent} from './site/footer/footer.component';
import {EditEventComponent} from './events/edit-event/edit-event.component';
import {PageNotFoundComponent} from './page-not-found-component'
import {AuthGuardService} from './auth-guard.service';
import { EditorComponent } from './editor/editor.component';
import { ArticleComponent } from './site/home/article/article.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule, MdNativeDateModule} from '@angular/material';
import { ShowEventComponent } from './site/home/show-event/show-event.component';
import { ScheduleComponent } from './site/schedule/schedule.component';
import { ScheduleTabsComponent } from './site/schedule/schedule-tabs/schedule-tabs.component';
import { ScheduleGroupComponent } from './site/schedule/schedule-group/schedule-group.component';
import { ScheduleEventComponent } from './site/schedule/schedule-group/schedule-event/schedule-event.component';
import { GroupsService } from './groups.service';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventsComponent,
    NewEventComponent,
    SignupComponent,
    SigninComponent,
    SiteComponent,
    HomeComponent,
    CmsComponent,
    HeaderComponent,
    AdminNavigationComponent,
    UsersComponent,
    MembersComponent,
    GroupsComponent,
    RentalsComponent,
    ContactComponent,
    FooterComponent,
    EditEventComponent,
    PageNotFoundComponent,
    EditorComponent,
    ArticleComponent,
    ShowEventComponent,
    ScheduleComponent,
    ScheduleTabsComponent,
    ScheduleGroupComponent,
    ScheduleEventComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    MaterialModule,
    MdNativeDateModule
  ],
  providers: [EventService, AuthService, AuthGuardService, GroupsService, { provide: LOCALE_ID, useValue: 'nl-BE' }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
