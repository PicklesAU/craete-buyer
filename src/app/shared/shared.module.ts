import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForbiddenNameDirective } from './custom-validators/forbidden-name.directive';

/**
 * @todo Write the documentation.
 */
@NgModule({
  declarations: [PageNotFoundComponent, ForbiddenNameDirective],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
