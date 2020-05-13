import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

/**
 * implementing the CanActivate interface which allows the guard to decide if a route can be activated with the canActivate() method.
 */
@Injectable({
    providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
    /**
     * constructor
     * @param router application route
     * @param authenticationService instance of authentication service
     */
    constructor(private router: Router, private authenticationService: AuthenticationService) {}

    /**
     * Implement canActive method from CanActivate interface.
     *
     * If the user is logged in this method will return true, else naviagate to login page.
     * @param route application route
     * @param state router state
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue; // to check if the user is logged in
        if (currentUser) {
            // logged in so return true
            return true;
        }

        /**
         * not logged in so redirect to login page with the return url
         */
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
