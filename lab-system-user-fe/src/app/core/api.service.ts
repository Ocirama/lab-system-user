import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';


interface Headers {
  [fieldName: string]: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private readonly urlPrefix = 'http://192.168.1.84:8080';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {
  }


  upload(file: File): Observable<HttpEvent<any>> {
    const headers: Headers = {};
    this.addAuthorizationHeader(headers);
    headers['Content-Type'] = 'application/json';
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.urlPrefix}/lei/excel/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
  upload2( file: File) {
    const headers: Headers = {};
    this.addAuthorizationHeader(headers);
    headers['Content-Type'] = 'application/json';
    const formData: FormData = new FormData();

    formData.append('file', file);

    return this.authService.authorizeRequest(
      this.http.post(this.urlPrefix + `/lei/excel/upload`, formData, {headers})
    );
  }

  addAuthorizationHeader(headers: Headers) {
    const token = this.authService.getToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }


  get(url: string) {
    const headers: Headers = {};
    this.addAuthorizationHeader(headers);
    return this.authService.authorizeRequest(
      this.http.get(this.urlPrefix + url, {headers})
    );
  }

  post(url: string, data: object) {
    const headers: Headers = {};
    this.addAuthorizationHeader(headers);
    headers['Content-Type'] = 'application/json';

    return this.authService.authorizeRequest(
      this.http.post(this.urlPrefix + url, data, {headers})
    );
  }

  put(url: string, data: object) {
    const headers: Headers = {};
    this.addAuthorizationHeader(headers);
    headers['Content-Type'] = 'application/json';
    return this.authService.authorizeRequest(
      this.http.put(this.urlPrefix + url, data, {headers})
    );
  }

  delete(url: string) {
    const headers: Headers = {};
    this.addAuthorizationHeader(headers);
    return this.authService.authorizeRequest(
      this.http.delete(`${this.urlPrefix}${url}`, {headers})
    );
  }

  postFormData(url: string, formData: FormData) {
    const headers: Headers = {};
    this.addAuthorizationHeader(headers);
    return this.authService.authorizeRequest(
      this.http.post(this.urlPrefix + url, formData, {headers})
    );
  }

  getBlob(url: string) {
    const headers: Headers = {};
    this.addAuthorizationHeader(headers);
    return this.authService.authorizeRequest(
      this.http.get(this.urlPrefix + url, {headers, responseType: 'blob'})
    );
  }

  putFormData(url: string, formData: FormData) {
    const headers: Headers = {};
    this.addAuthorizationHeader(headers);
    return this.authService.authorizeRequest(
      this.http.put(this.urlPrefix + url, formData, {headers})
    );
  }
}
