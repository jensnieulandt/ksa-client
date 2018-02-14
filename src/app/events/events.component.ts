import {Component, OnInit} from '@angular/core';
import {EventService} from '../event.service';
import {Response} from '@angular/http';
import {Event} from '../event.interface';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[];

  constructor(private eventService: EventService, private auth: AuthService) {
  }

  ngOnInit() {
    this.onGetEvents();
  }

  onGetEvents() {
    this.eventService.getGroupEvents(this.auth.getGroup())
      .subscribe(
        (events: Event[]) => this.events = events,
        (error: Response) => console.log(error)
      );
  }

  onDeleted(event: Event) {
    const position = this.events.findIndex(
      (eventEl: Event) => {
        return eventEl.id === event.id;
      }
    );
    this.events.splice(position, 1);
  }

}
