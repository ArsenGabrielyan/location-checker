import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  constructor(private http: HttpClient) { }
  getLocation(lon:number,lat:number): Observable<any>{
    return this.http.get(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}`)
  }
}