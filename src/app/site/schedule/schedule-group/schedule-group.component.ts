import {Component, Input, OnInit} from '@angular/core';
import {EventService} from '../../../event.service';
import {Event} from '../../../event.interface';
import {AuthService} from '../../../auth.service';
import {Group} from '../../../group.interface';

@Component({
  selector: 'app-schedule-group',
  templateUrl: './schedule-group.component.html',
  styleUrls: ['./schedule-group.component.css']
})
export class ScheduleGroupComponent implements OnInit {
  @Input() groupId: number;
  events: Event[];

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.onGetEvents();
  }

  onGetEvents() {
    this.eventService.getGroupEvents(this.groupId)
      .subscribe(
        (events: Event[]) => this.events = events,
        (error: Response) => console.log(error)
      );
  }

  onGetGroup() {

  }

}
