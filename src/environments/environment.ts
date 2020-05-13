// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/**
 * This file can be replaced during build by using the `fileReplacements` array.
 *
 * `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
 *
 * The list of file replacements can be found in `angular.json`.
 */

export const environment = {
    production: false,
    hostURL: 'http://13.75.164.20',
    applicationInsights: {
        instrumentationKey: 'bd808937-649e-447f-9431-ef1c65b5d48d',
        enableAutoRouteTracking: true,
    },
    oidc: {
        issuer: 'https://pickles.oktapreview.com/oauth2/aus9mbgm52M96swvu0h7', //`${ISSUER}`,
        clientId: '0oamtjz6xb4hrHF1A0h7', //`${CLIENT_ID}`,
        redirectUri: 'http://localhost:4200/implicit/callback',
        scope: 'openid profile email',
        // onAuthRequired:
        storage: 'sessionStorage',
        autoRenew: false,
        testing: {
            disableHttpsCheck: true,
        },
    },
};

/*
 * For easier debugging in development mode, you can import the following file

 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 *
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
