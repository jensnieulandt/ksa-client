import {Component, OnInit} from '@angular/core';
import {Group} from '../../../group.interface';
import {GroupsService} from '../../../groups.service';

@Component({
  selector: 'app-schedule-tabs',
  templateUrl: './schedule-tabs.component.html',
  styleUrls: ['./schedule-tabs.component.css']
})
export class ScheduleTabsComponent implements OnInit {
  groups: Group[];

  constructor(private groupsService: GroupsService) {
  }

  ngOnInit() {
    this.onGetGroups();
  }

  onGetGroups() {
    this.groupsService.getGroups()
      .subscribe(
        (groups: Group[]) => this.groups = groups,
        (error: Response) => console.log(error)
      );
  }

}
