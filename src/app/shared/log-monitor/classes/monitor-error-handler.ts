import { Injector, Injectable, ErrorHandler } from '@angular/core';
import { MonitorService } from '../services/monitor.service';

@Injectable()
/**
 * custom handler which will inherit form Angular default implementation, we will lazily get the MonitoringService,
 * send the error log and call the default angular logic
 */
export class MonitorErrorHandler extends ErrorHandler {
    constructor(private injector: Injector) {
        super();
    }

    /**
     * Handle error method.
     * @param error error text / error object.
     */
    handleError(error: any): void {
        const monitorService = this.injector.get(MonitorService);
        monitorService.logError(error);
        super.handleError(error);
    }
}
