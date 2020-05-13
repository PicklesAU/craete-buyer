import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

/**
 * Custom preload strategy.
 * 
 * Implement preload method of PreloadingStrategy class.
 * 
 * Used for custom preload strategy for lazy modules, otherwise all lazy modules will be preloaded.
 */
export class CustomPreloading implements PreloadingStrategy {
    /**
     * If route contains preload : true, then that lazy module will be loaded after initial bundle is loaded.
     * @param route application route
     * @param preload preload function
     */
    preload(route: Route, preload: Function): Observable<any> {
        if (route.data && route.data.preload) {
            return preload();
        } else {
            return of(null);
        }
    }
}