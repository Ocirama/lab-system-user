import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlPrefix = 'http://127.0.0.1:8080';

  constructor(private http: HttpClient) {
  }

  get(url: string) {
    return this.http.get(this.urlPrefix + url, this.getRequestOptions());
  }

  post(url: string, data: object) {
    return this.http.post(this.urlPrefix + url, data, this.getRequestOptions());
  }

  delete(url: string) {
    return this.http.delete(`${this.urlPrefix}${url}`);
  }
  private getRequestOptions() {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token')
    };
    return {
      headers
    };
  }
}
