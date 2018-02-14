import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {EventService} from '../../event.service';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  description: string;
  currentUserId: number;
  currentUserGroupId: number;
  id: number;

  constructor(private eventService: EventService, private authService: AuthService) {
  }

  ngOnInit() {
    this.currentUserId = this.authService.getUser();
    this.currentUserGroupId = this.authService.getGroup();
  }

  onSubmit(form: NgForm) {
    this.eventService.addEvent(form.value.title)
      .subscribe(
        () => alert('Event created!')
      );
    form.reset();
  }

  onKeyup($event) {
    this.description = $event;
  }

}
