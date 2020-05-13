import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { LoginComponent } from './login/login/login.component';
import { CustomPreloading } from './shared/custom-preloaders/custom-preloading';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { BuyerMgmtComponent } from './buyer-mgmt/buyer-mgmt.component';

/**
 * Routing enables us to navigate between the pages
 *
 * Route Module has the below functionalities
 *
 * 1. App Routes defines the components to be loaded for the routes
 *
 * 2. Configurations to bootstrap or load approutes
 */
export const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '',
        redirectTo: '/buyer',
        pathMatch: 'full',
    },
    {
        path: 'buyer',
        component: BuyerMgmtComponent,
    },
    {
        path: 'implicit/callback',
        component: OktaCallbackComponent,
    },
    { path: '**', component: PageNotFoundComponent },
];

/**
 * Ng Module for app routing
 *
 * set preload strategy inorder to preload lazy modules.
 *
 * If we didn't define a custom preload strategy then all lazy modules will be preloaded.
 */
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: CustomPreloading, enableTracing: true })],
    exports: [RouterModule],
    providers: [CustomPreloading],
})
export class AppRoutingModule {}
