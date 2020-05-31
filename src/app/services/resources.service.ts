import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  url = 'http://localhost:5000/';
  constructor(private http: HttpClient) { }

  getResource(resource) {
    return this.http.get(this.url+'resources/'+resource);
  }
}
