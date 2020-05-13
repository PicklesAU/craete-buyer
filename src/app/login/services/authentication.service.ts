import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';

/**
 * Services for authentication.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserTokenSubject: BehaviorSubject<User>;
  public currentUserToken: Observable<User>;

  tokenKey: string = "UserToken";
  userKey: string = "UserProfile";

  httpOptions = {
    headers: new HttpHeaders({
      'accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic MG9hbXRndXZvY01jeEVROTkwaDc6dmxwRjQteHZzRjFiMkJqZENSemo3ekZjZEdfZ3pTNG9JMzFqREU2Xw=='
    })
  };

  /**
   * constructor.
   * @param http instance of http client
   */
  constructor(private http: HttpClient) {
    this.currentUserTokenSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(this.tokenKey)));
    this.currentUserToken = this.currentUserTokenSubject.asObservable();
  }

  /**
   * Property to get current user value.
   */
  public get currentUserValue(): User {
    return this.currentUserTokenSubject.value;
  }

  /**
   * Login method.
   */
  login() {
    return this.http.post<any>(`https://pickles.oktapreview.com/oauth2/aus9mbgm52M96swvu0h7/v1/token`, 'grant_type=password&scope=protected_rw_pas_pickles&redirect_uri=http://localhost:4200', this.httpOptions)
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.JWTToken) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(this.tokenKey, JSON.stringify(user));
          this.fetchUserProfile(user.UserIdentification);
          this.currentUserTokenSubject.next(user);
        }

        return user;
      }));
  }

  /**
   * Logout method.
   */
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.currentUserTokenSubject.next(null);
  }

  /**
   * Get user profile using user name.
   * @param username user name 
   */
  fetchUserProfile(username: string) {
    this.http.post<any>(`https://dvt.developer.pickles.com.au/sdf/userprofile`, { "Identification": username })
      .subscribe((val) => {
        localStorage.setItem(this.userKey, val);
      },
        response => {
          console.log("error in user profile service", response);
        });
  }
}
