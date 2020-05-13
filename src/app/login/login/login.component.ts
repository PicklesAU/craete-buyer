import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { first } from 'rxjs/operators';

// import { AuthenticationService } from '../services/authentication.service';

import { OktaAuthService } from '@okta/okta-angular';

/**
 * @todo Write the documentation.
 */
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    // loading = false;
    // submitted = false;
    // error = '';

    userName: string;
    isAuthenticated: boolean;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private oktaAuth: OktaAuthService, // private authenticationService: AuthenticationService
    ) {
        this.oktaAuth.$authenticationState.subscribe(isAuthenticated => (this.isAuthenticated = isAuthenticated));
    }

    async ngOnInit() {
        this.isAuthenticated = await this.oktaAuth.isAuthenticated();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl']; // || '/'
        if (this.isAuthenticated) {
            const userClaims = await this.oktaAuth.getUser();
            this.userName = userClaims.name;
            // this.router.navigate([this.returnUrl]);
            setTimeout(function() {
                console.log('CONSOLE: ' + this.returnUrl);
                location.href = this.returnUrl ? this.returnUrl : '/buyer';
                // location.reload();
            }, 3000);
        }

        // reset login status
        // this.authenticationService.logout();
    }

    /**
     * Login method.
     */
    login() {
        this.oktaAuth.loginRedirect();
    }
}
