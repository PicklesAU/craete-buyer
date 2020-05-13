import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OktaAuthModule, OktaAuthService, OKTA_CONFIG } from '@okta/okta-angular';
import { DataTablesModule } from 'angular-datatables';
import { HighchartsChartModule } from 'highcharts-angular';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { LoginModule } from './login/login.module';
import { fakeBackendProvider } from './login/services/fake-backend';
import { MonitorErrorHandler } from './shared/log-monitor/classes/monitor-error-handler';
import { MonitorService } from './shared/log-monitor/services/monitor.service';
import { SharedModule } from './shared/shared.module';
import { BuyerMgmtComponent } from './buyer-mgmt/buyer-mgmt.component';
import { BuyerMgmtModule } from './buyer-mgmt/buyer-mgmt.module';

/**
 * App module is the root module of the Angular application . It initiates bootstrapping the whole angular applications.
 *
 * It also has a bootstrapping entry component called as App component
 *
 * ###### Angular Module
 *
 * Angular Module is the best way to organise modules, components, pipes, directives used in the module. It also
 *
 * It also describe the way to import external modules
 */
/**
 *
 *
 * @export
 * @class AppModule
 */
@NgModule({
    declarations: [AppComponent, HighlightDirective],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HighchartsChartModule,
        OktaAuthModule,
        DataTablesModule,
        LoginModule,
        SharedModule,
        AppRoutingModule,
        BuyerMgmtModule,
    ],
    providers: [
        fakeBackendProvider,
        OktaAuthService,
        MonitorService,
        {
            provide: ErrorHandler,
            useClass: MonitorErrorHandler,
        },
        { provide: OKTA_CONFIG, useValue: environment.oidc },
    ],
    bootstrap: [AppComponent],
    entryComponents: [BuyerMgmtComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

/*
 * App module is the root module of the Angular application. It initiates bootstrapping the whole angular applications.
 *
 * It also has a bootstrapping entry component called as App component
 *
 * ###### Angular Module
 *
 * Angular Module is the best way to organise modules, components, pipes, directives used in the module. It also
 *
 * It also describe the way to import external modules
 */
export class AppModule {}
