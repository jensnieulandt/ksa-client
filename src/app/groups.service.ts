import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GroupsService {

  constructor(private http: Http) {
  }

  getGroups(): Observable<any> {
    return this.http.get('http://ksa.test/api/groups')
      .map(
        (response: Response) => {
          return response.json().groups;
        }
      )
  }
}
