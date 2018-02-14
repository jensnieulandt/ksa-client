import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Event} from '../../event.interface';
import {EventService} from '../../event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() event: Event;
  @Output() eventDeleted = new EventEmitter<Event>();
  editing = false;
  editValue = '';
  startDate;
  endDate;
  startEqualsEnd;

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.startDate = new Date(this.event.end).toDateString();
    this.endDate = new Date(this.event.start).toDateString();
    if (this.startDate === this.endDate) {
      this.startEqualsEnd = true;
    } else {
      this.startEqualsEnd = false;
    }
  }

  onEdit() {
    this.editing = true;
    this.editValue = this.event.title;
  }

  onCancel() {
    this.editValue = '';
    this.editing = false;
  }

  onDelete() {
    this.eventService.deleteEvent(this.event.id)
      .subscribe(
        () => {
          this.eventDeleted.emit(this.event);
          console.log('Event deleted.');
        }
      );
  }

}
