import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from './authentication.service';

/**
 * Api interceptor service for intercepting any api calls.
 */
@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor {

  /**
   * constructor.
   * @param authenticationService instance of authentication service
   */
  constructor(private authenticationService: AuthenticationService) { }

  /**
   * Intercept method for intercepting http request.
   * @param request current request.
   * @param next next http handler.
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to api url
    const currentUserToken = this.authenticationService.currentUserValue;
    if (currentUserToken && currentUserToken.JWTToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUserToken.JWTToken}`
        }
      });
    }

    return next.handle(request);
  }
}
