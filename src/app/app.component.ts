import { MonitorService } from './shared/log-monitor/services/monitor.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './login/models/user';
import { OktaAuthService } from '@okta/okta-angular';

/**
 * Angular component is a basic building block of a UI application
 *
 * It is the combination of template - HTML Page, CSS- Style File ,
 *
 * TS File - Type script file  handles below
 *
 * 1. Lifecycle of a component
 *
 * 2. Property bindings and Event handlings of a view - HTML Partial.
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'Buyer Management';

    currentUser: User;
    isAuthenticated: boolean;

    constructor(private monitorService: MonitorService, private router: Router, private oktaAuth: OktaAuthService) {
        this.oktaAuth.$authenticationState.subscribe(isAuthenticated => (this.isAuthenticated = isAuthenticated));
    }

    /**
     * On Init method
     */
    async ngOnInit() {
        this.isAuthenticatedUser();
    }

    /**
     * Check for Authentication of the User
     */
    async isAuthenticatedUser() {
        this.isAuthenticated = await this.oktaAuth.isAuthenticated();
        if (this.isAuthenticated) {
            const userClaims = await this.oktaAuth.getUser();
            this.currentUser = new User();
            this.currentUser.UserName = userClaims.name;
            this.currentUser.Email = userClaims.email;
            this.setAuthenticatedUserContext();
        } else {
            this.currentUser = undefined;
        }
    }

    /**
     * Log in method.
     */
    login() {
        this.oktaAuth.loginRedirect();
    }

    /**
     * Log out method.
     */
    logout() {
        this.currentUser = undefined;
        this.oktaAuth.logout('/');
        this.clearAuthenticatedUserContext();
        this.router.navigate(['/login']);
    }

    /**
     * Set authenticated user context method
     */
    setAuthenticatedUserContext() {
        this.monitorService.setAuthenticatedUserContext(this.currentUser.UserName, this.currentUser.Email, true);
    }

    /**
     * Clear authenticated user context method
     */
    clearAuthenticatedUserContext() {
        this.monitorService.clearAuthenticatedUserContext();
    }
}
