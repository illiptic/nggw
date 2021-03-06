import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

const baseUrl = environment.apiUrl + '/'
const key = '5129EB54-8EB1-3941-95FF-BF1826D6309F615A7A1B-52D6-423E-97E7-0450B0C25307'

const headers = new Headers({
  Authorization: 'Bearer ' + key
})

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  public get(url: string): Observable<any> {
    return this.http
      .get(baseUrl + url, {headers})
      .map(response => response.json())
  }
}
