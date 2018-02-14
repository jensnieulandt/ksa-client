import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor(private http: Http) {
  }

  loggedIn() {
    return tokenNotExpired();
  }

  admin() {
    const role = this.getRole();
    if (role === 2 || role === 3) {
      return true;
    } else {
      return false;
    }
  }

  superadmin() {
    const role = this.getRole();
    if (role === 3) {
      return true;
    } else {
      return false;
    }
  }

  signup(first_name: string,
         last_name: string,
         email: string,
         password: string) {
    return this.http.post('http://ksa.test/api/user', {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
      },
      {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})}
    );
  }

  signin(email: string,
         password: string) {
    return this.http.post('http://ksa.test/api/user/authenticate', {
        email: email,
        password: password
      },
      {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})}
    ).map(
      (response: Response) => {
        const token = response.json().token;
        return {token: token, decodedToken: 'test'};
      }
    )
      .do(
        tokenData => {
          localStorage.setItem('token', tokenData.token);
        }
      );
  }

  logout() {
    localStorage.removeItem('token');
    return true;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  decodeToken($token) {
    const base64Url = $token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  getDecodedToken() {
    return this.decodeToken(this.getToken());
  }

  getRole() {
    return this.getDecodedToken().rol;
  }

  getGroup() {
    return this.getDecodedToken().grp;
  }

  getUser() {
    return this.getDecodedToken().usr;
  }
}
