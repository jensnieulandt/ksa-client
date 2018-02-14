import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.loggedIn()) {
      const requiresAdmin = route.data.requiresAdmin || false;
      const requiresSuperAdmin = route.data.requiresSuperAdmin || false;
      if (requiresAdmin) {
        // Check that the user is an admin...
        return this.auth.admin();
      }
      if (requiresSuperAdmin) {
        // Check that the user is a superadmin...
        return this.auth.superadmin();
      }
      return true;
    } else {
      this.router.navigate(['admin/login'], {queryParams: {returnUrl: state.url}});
      return false;
    }
  }

}
