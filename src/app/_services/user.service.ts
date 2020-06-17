import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/User';
const httpOptions = {
  headers: new HttpHeaders({
Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl = environment.baseUrl + 'Reciters/';
constructor(private httpClient: HttpClient) { }
getUsers(): Observable<User[]> {
return this.httpClient.get<User[]>(this.baseUrl, httpOptions);
}
getUser(id): Observable<User> {
return this.httpClient.get<User>(this.baseUrl + id, httpOptions);
}
}
