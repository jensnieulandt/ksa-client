import {Component, OnInit} from '@angular/core';
import {EventService} from '../../event.service';
import {Response} from '@angular/http';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  event: Event;
  description: string;
  currentUserId: number;
  id: number;

  constructor(private eventService: EventService, private authService: AuthService) {
  }

  ngOnInit() {
    this.id = 1;
    this.onGetEvent(this.id);
    this.currentUserId = this.authService.getUser();
  }

  onGetEvent(id) {
    this.authService
    this.eventService.getEvent(id)
      .subscribe(
        (event: Event) => this.event = event,
        (error: Response) => console.log(error)
      );
  }

  onSubmit(form: NgForm) {
    this.eventService.updateEvent(
      form.value.id, // id
      form.value.event_type_id, // event_type_id
      form.value.group_id, // group_id
      form.value.user_id, // user_id
      this.authService.getUser(), // last_updated_by
      form.value.event_page_id,
      form.value.published, // published
      form.value.title, // title
      this.description, // description
      form.value.allDay,
      form.value.start, // start
      form.value.end, // end
      form.value.url, // url
      form.value.className,
      form.value.editable,
      form.value.startEditable,
      form.value.durationEditable,
      form.value.resourceEditable,
      form.value.rendering,
      form.value.overlap,
      form.value.constraint,
      form.value.source,
      form.value.color,
      form.value.backgroundColor,
      form.value.borderColor,
      form.value.textColor,
    ).subscribe(
      (event: Event) => alert('Event successfully updated!'),
      error => console.log(error),
    );
  }

  onKeyup($event) {
    this.description = $event;
  }

}
