import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

import {AuthService} from './auth.service';
import {decode} from 'punycode';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(): boolean {
    if (this.authService.getToken()) {
      return true;
    }
    this.router.navigate(['user/login']);
    return false;
  }
/**canActivate(route: ActivatedRouteSnapshot): boolean {

    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;

    const token = this.authService.getToken();

    // decode the token to get its payload
    const tokenPayload = decode(token);

    const jwtData = token.split('.')[1];
    const decodedJwtJsonData = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJsonData);

    const isAdmin = decodedJwtData.expectedRole;

    if (
      !token ||
      isAdmin !== expectedRole
    ) {
      this.router.navigate(['user/login']);
      return false;
    }
    return true;
  }

  decode(): string {
    const token = this.authService.getToken();
    return decode(token);
  }**/
}
