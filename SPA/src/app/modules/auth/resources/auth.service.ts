import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { IUser } from './IUser';
import { Identifiers } from '@angular/compiler';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = environment.baseUrl;
  isLoggedIn: boolean;

  currentUser : IUser = {
    username : null,
    email : null
  };

  constructor(private http: HttpClient) {}

  login(model: any): Observable<IUser> {
    return this.http.post(this.baseUrl + 'identity/login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user.result.succeeded) {
          //temporary
          this.isLoggedIn = response.result.succeeded;
          this.currentUser.username = user.username;
          this.currentUser.email = user.email;

          return this.currentUser;
        }
      })
    );
  }

  logout() {
    this.isLoggedIn = false;
  }

  confirmEmail(model: any) {
    //Video 16
    return of();
    //return this.http.post(this.baseUrl + 'identity/confirmemail', model);
  }

  register(model: any){
    return this.http.post(this.baseUrl+'identity/register',model);
  }
}
