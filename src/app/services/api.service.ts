import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public httpClient: HttpClient
    ) { }

    getUsers(): Observable<any> {
      return this.httpClient.get('https://jsonplaceholder.typicode.com/users/')
    }

    getPosts(userId): Observable<any> {
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/posts/?userId=${userId}`)
    }
}
