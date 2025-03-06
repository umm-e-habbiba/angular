import { AbstractControl, ValidatorFn } from '@angular/forms';

//for hardcoded string
// export function forbiddenNameValidator(
//   control: AbstractControl
// ): { [key: string]: any } | null {
//   const forbidden = /admin/.test(control.value);
//   return forbidden ? { forbiddenName: { value: control.value } } : null;
// }
//for string from function parameter , we will create a facory function which will return validatorfunction
export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = forbiddenName.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
