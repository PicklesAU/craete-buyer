import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

// #docregion custom-validator
/**
 * Custom validator
 * @param nameRe 
 */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
// #enddocregion custom-validator

@Directive({
  selector: '[appForbiddenName]'
})
export class ForbiddenNameDirective {

  constructor() { }

}
