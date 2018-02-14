import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../../event.interface';
import {EventService} from '../../../../event.service';
import {Image} from '../../../../image.interface';

@Component({
  selector: 'app-schedule-event',
  templateUrl: './schedule-event.component.html',
  styleUrls: ['./schedule-event.component.css']
})
export class ScheduleEventComponent implements OnInit {
  @Input() event: Event;
  images: Image[];
  startDate;
  endDate;
  startEqualsEnd;
  eventId;

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
    this.eventId = this.event.id;
    this.onGetImages();
  }

  onGetImages() {
    this.eventService.getImages(this.eventId)
      .subscribe(
        (images: Image[]) => this.images = images,
        (error: Response) => console.log(error)
      );
  }

}
