import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { Injectable } from "@angular/core";
import { ResolveEnd, Router, ActivatedRouteSnapshot } from "@angular/router";
import { Subscription } from "rxjs";
import { environment } from "src/environments/environment";
import { filter } from "rxjs/operators";
import { EventTelemetry } from "../models/event-telemetry";
import { PageViewTelemetry } from "../models/page-view-telemetry";
import { PageViewPerformanceTelemetry } from "../models/page-view-performance-telemetry";
import { ExceptionTelemetry } from "../models/exception-telemetry";
import { TraceTelemetry } from "../models/trace-telemetry";
import { MetricTelemetry } from "../models/metric-telemetry";
import { DependencyTelemetry } from "../models/dependency-telemetry";

/**
 * This is a monitoring service using Azure Application Insights
 */
@Injectable({
  providedIn: "root"
})
// This is a monitoring service using Azure Application Insights
export class MonitorService {
  private routerSubscription: Subscription;

  private appInsights = new ApplicationInsights({
    config: {
      instrumentationKey: environment.applicationInsights.instrumentationKey,
      enableAutoRouteTracking:
        environment.applicationInsights.enableAutoRouteTracking
    }
  });

  /**
   * constructor.
   * @param router application route
   */
  constructor(private router: Router) {
    this.appInsights.loadAppInsights();
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof ResolveEnd))
      .subscribe((event: ResolveEnd) => {
        const activatedComponent = this.getActivatedComponent(event.state.root);
        if (activatedComponent) {
          this.logPageView({
            name: `${activatedComponent.name} ${this.getRouteTemplate(
              event.state.root
            )}`,
            uri: event.urlAfterRedirects
          });
        }
      });
  }
  /**
   * Log a user action or other occurrence.
   */
  logEvent(eventTelemetry: EventTelemetry, customProperties?: any): void {
    this.appInsights.trackEvent(eventTelemetry, customProperties);
  }
  /**
   * Logs that a page, or similar container was displayed to the user.
   */
  logPageView(pageViewTelemetry: PageViewTelemetry): void {
    this.appInsights.trackPageView(pageViewTelemetry);
  }
  /**
   * Log a bag of performance information via the customProperties field.
   */
  logPageViewPerformance(
    pageViewPerformanceTelemetry: PageViewPerformanceTelemetry
  ): void {
    this.appInsights.trackPageViewPerformance(pageViewPerformanceTelemetry);
  }
  /**
   * Log an exception that you have caught.
   */
  logException(exceptionTelemetry: ExceptionTelemetry): void {
    this.appInsights.trackException(exceptionTelemetry);
  }
  /**
   * Log a diagnostic scenario such entering or leaving a function.
   */
  logTrace(traceTelemetry: TraceTelemetry): void {
    this.appInsights.trackTrace(traceTelemetry);
  }
  /**
   * Log a numeric value that is not associated with a specific event. Typically used
   * to send regular reports of performance indicators.
   *
   * To send a single measurement, just use the `name` and `average` fields
   * of {@link MetricTelemetry}.
   *
   * If you take measurements frequently, you can reduce the telemetry bandwidth by
   * aggregating multiple measurements and sending the resulting average and modifying
   * the `sampleCount` field of {@link MetricTelemetry}.
   */
  logMetric(metricTelemetry: MetricTelemetry, customProperties?: any): void {
    this.appInsights.trackMetric(metricTelemetry, customProperties);
  }
  /**
   * Starts the timer for tracking a page load time. Use this instead of `trackPageView`
   * if you want to control when the page view timer starts and stops,
   * but don't want to calculate the duration yourself. This method doesn't send any telemetry.
   * Call `stopTrackPage` to log the end of the page view
   * and send the event.
   * @param name A string that idenfities this item, unique within this HTML document. Defaults to the document title.
   */
  logStartTrackPage(name?: string): void {
    this.appInsights.startTrackPage(name);
  }
  /**
   * Stops the timer that was started by calling `startTrackPage` and
   * sends the pageview load time telemetry with the specified properties and measurements.
   * The duration of the page view will be the time between calling `startTrackPage` and `stopTrackPage`.
   * @param   name  String - The string you used as the name in startTrackPage. Defaults to the document title.
   * @param   url   String - a relative or absolute URL that identifies the page or other item. Defaults to the window location.
   * @param   properties  map[string, string] - additional data used to filter pages and metrics in the portal. Defaults to empty.
   * @param   measurements    map[string, number] - metrics associated with this page,
   * displayed in Metrics Explorer on the portal. Defaults to empty.
   */
  logStopTrackPage(
    name?: string,
    url?: string,
    customProperties?: {
      [key: string]: any;
    },
    measurements?: {
      [key: string]: number;
    }
  ): void {
    this.appInsights.stopTrackPage(name, url, customProperties, measurements);
  }
  logStartTrackEvent(name?: string): void {
    this.appInsights.startTrackEvent(name);
  }
  /**
   * Log an extended event that you started timing with `startTrackEvent`.
   * @param   name    The string you used to identify this event in `startTrackEvent`.
   * @param   properties  map[string, string] - additional data used to filter events and metrics in the portal. Defaults to empty.
   * @param   measurements    map[string, number] - metrics associated with this event,
   * displayed in Metrics Explorer on the portal. Defaults to empty.
   */
  logStopTrackEvent(
    name: string,
    properties?: {
      [key: string]: string;
    },
    measurements?: {
      [key: string]: number;
    }
  ): void {
    this.appInsights.stopTrackEvent(name, properties, measurements);
  }
  /**
   * Set the authenticated user id and the account id. Used for identifying a specific signed-in user.
   * Parameters must not contain whitespace or ,;=|
   *
   * The method will only set the `authenicatedUserId` and `accountId` in the curent page view.
   * To set them for the whole sesion, you should set `storeInCookie = true`
   * @param {string} authenticatedUserId
   * @param {string} [accountId]
   * @param {boolean} [storeInCookie=false]
   * @memberof Initialization
   */
  setAuthenticatedUserContext(
    authenticatedUserId: string,
    accountId?: string,
    storeInCookie?: boolean
  ): void {
    this.appInsights.setAuthenticatedUserContext(
      authenticatedUserId,
      accountId,
      storeInCookie
    );
  }
  /**
   * Clears the authenticated user id and account id. The associated cookie is cleared, if present.
   */
  clearAuthenticatedUserContext(): void {
    this.appInsights.clearAuthenticatedUserContext();
  }
  /**
   * Log a dependency call (e.g. ajax)
   * @param {DependencyTelemetry} dependency
   */
  logDependencyData(dependencyTelemetry: DependencyTelemetry): void {
    this.appInsights.trackDependencyData(dependencyTelemetry);
  }
  /**
   * Manually trigger an immediate send of all telemetry still in the buffer.
   * @param {boolean} [async=true]
   */
  flush(async?: boolean): void {
    this.appInsights.flush(async);
  }
  /**
   * Call any functions that were queued before the main script was loaded
   */
  emptyQueue(): void {
    this.appInsights.emptyQueue();
  }
  /**
   *  Trace the component of the inner most route and the route template
   * @description In order to record what users do on the application,
   * we have hooked this mechanism on the Angular Router: each time a route changes,
   * an event will be sent to Azure Application Insights, so we can record what people are doing.
   */
  //
  private getActivatedComponent(snapshot: ActivatedRouteSnapshot): any {
    if (snapshot.firstChild) {
      return this.getActivatedComponent(snapshot.firstChild);
    }

    return snapshot.component;
  }
  /**
   * @description This is able to know what users are doing and if they are encountering any issues to report routing events data.
   */
  private getRouteTemplate(snapshot: ActivatedRouteSnapshot): string {
    let path = "";
    if (snapshot.routeConfig) {
      path += snapshot.routeConfig.path;
    }

    if (snapshot.firstChild) {
      return path + this.getRouteTemplate(snapshot.firstChild);
    }

    return path;
  }
  /**
   * @description This is able to know what users are doing and if they are encountering any issues to report unhandled errors data.
   */
  public logError(
    error: Error,
    properties?: { [key: string]: string },
    measurements?: { [key: string]: number }
  ) {
    const exception: ExceptionTelemetry = { exception: error, properties, measurements };
    this.logException(exception);
  }

  /**
   * Add global properties
   * @param properties 
   */
  private AddGlobalProperties(properties?: {
    [key: string]: string;
  }): { [key: string]: string } {
    if (!properties) {
      properties = {};
    }

    // add your custom properties such as app version

    return properties;
  }
}
