import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { User } from '../_models/User';
const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl = environment.baseUrl + 'auth/';
decodeToken: any;
constructor(private http: HttpClient) {
  const token = localStorage.getItem('token');
  if (token) {
    this.decodeToken = helper.decodeToken(token); }

 }

login(model: any) {
  return this.http.post(this.baseUrl +  'login' , model).pipe(
    map((response: any) => {
      const user = response;
      if (user) {
        localStorage.setItem('token', user.token);
        this.decodeToken = helper.decodeToken(user.token);
        console.log(this.decodeToken);
      }
    }
    )
    );
}
register(user: User) {
  return this.http.post(this.baseUrl + 'Register', user);
}
LoggedIn() {
  const token = localStorage.getItem('token');
  return !helper.isTokenExpired(token);
}

}
