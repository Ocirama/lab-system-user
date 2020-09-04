import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

import {AuthService} from './auth.service';
import {decode} from 'punycode';
import {DecoderService} from '../system/shared/decoder.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard2 implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private decoder: DecoderService) {
  }

  canActivate(): boolean {
    if (this.authService.getToken() && this.decoder.isAdmin()) {
      return true;
    }
    this.router.navigate(['user/login']);
    return false;
  }
}
