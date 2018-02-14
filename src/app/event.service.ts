import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';

@Injectable()
export class EventService {

  constructor(private http: Http, private authService: AuthService) {
  }

  addEvent(title: string) {
    const token = this.authService.getToken();
    const body = JSON.stringify({title: title});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://ksa.test/api/event?token=' + token, body, {headers: headers})
  }

  getEvents(): Observable<any> {
    return this.http.get('http://ksa.test/api/events')
      .map(
        (response: Response) => {
          return response.json().events;
        }
      )
  }

  getEvent(id: number): Observable<any> {
    const token = this.authService.getToken();
    return this.http.get('http://ksa.test/api/event/' + id + '?token=' + token)
      .map(
        (response: Response) => {
          return response.json().event;
        }
      )
  }

  updateEvent(id: number,
              event_type_id: number,
              group_id: number,
              user_id: number,
              last_updated_by: number,
              event_page_id: number,
              published: boolean,
              title: string,
              description: string,
              allDay: number,
              start: string,
              end: string,
              url: string,
              className: string,
              editable: boolean,
              startEditable: boolean,
              durationEditable: boolean,
              resourceEditable: boolean,
              rendering: string,
              overlap: boolean,
              constraint: boolean,
              source: string,
              color: string,
              backgroundColor: string,
              borderColor: string,
              textColor: string) {
    const body = JSON.stringify({
      event_type_id: event_type_id,
      group_id: group_id,
      user_id: user_id,
      last_updated_by: last_updated_by,
      event_page_id: event_page_id,
      published: published,
      title: title,
      description: description,
      allDay: allDay,
      start: start,
      end: end,
      url: url,
      className: className,
      editable: editable,
      startEditable: startEditable,
      durationEditable: durationEditable,
      resourceEditable: resourceEditable,
      rendering: rendering,
      overlap: overlap,
      constraint: constraint,
      source: source,
      color: color,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      textColor: textColor,
    });
    console.log(body);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = this.authService.getToken();
    return this.http.put('http://ksa.test/api/event/' + id + '?token=' + token, body, {headers: headers})
      .map(
        (response: Response) => response.json()
      );
  }

  deleteEvent(id: number) {
    const token = this.authService.getToken();
    return this.http.delete('http://ksa.test/api/event/' + id + '?token=' + token);
  }

  getGroupEvents(id: number): Observable<any> {
    return this.http.get('http://ksa.test/api/group-events/' + id)
      .map(
        (response: Response) => {
          return response.json().events;
        }
      );
  }

  getImages(id: number): Observable<any> {
    return this.http.get('http://ksa.test/api/images/' + id)
      .map(
        (response: Response) => {
          return response.json().images;
        }
      );
  }
}
