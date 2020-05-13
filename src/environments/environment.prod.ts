export const environment = {
    production: true,
    hostURL: 'http://test-pickles-vdc.australiaeast.cloudapp.azure.com',
    applicationInsights: {
        instrumentationKey: '66aee139-0487-40cd-b694-a7efe28c8a1b',
        enableAutoRouteTracking: true,
    },
    oidc: {
        issuer: 'https://pickles.oktapreview.com/oauth2/aus9mbgm52M96swvu0h7', //`${ISSUER}`,
        clientId: '0oamtjz6xb4hrHF1A0h7', //`${CLIENT_ID}`,
        redirectUri: 'http://test-pickles-vdc.australiaeast.cloudapp.azure.com/implicit/callback',
        scope: 'openid profile email',
        // onAuthRequired:
        storage: 'sessionStorage',
        autoRenew: false,
        testing: {
            disableHttpsCheck: true,
        },
    },
};
