import {Injectable} from '@angular/core';
import {AuthService} from '../../core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DecoderService {

  constructor(private authService: AuthService) {
  }

  getUser(): string {
    const token = this.authService.getToken();


    const jwtData = token.split('.')[1];
    const decodedJwtJsonData = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJsonData);

    const userId = decodedJwtData.userId;
    return userId;
  }

  isAdmin(): boolean {
    const token = this.authService.getToken();


    const jwtData = token.split('.')[1];
    const decodedJwtJsonData = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJsonData);

    const isAdmin = decodedJwtData.expectedRole;

    if (isAdmin !== 'admin') {
      return false;
    }
    return true;
  }

  isAdminOrUser(): boolean {
    const token = this.authService.getToken();


    const jwtData = token.split('.')[1];
    const decodedJwtJsonData = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJsonData);

    const isAdmin = decodedJwtData.expectedRole;

    if (isAdmin !== 'admin' || 'user') {
      return false;
    }
    return true;
  }

}
