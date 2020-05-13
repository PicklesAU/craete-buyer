import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

/**
 * @todo Write the documentation.
 */
@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginModule {}
