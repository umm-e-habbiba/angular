import { AbstractControl } from '@angular/forms';
//crossfield validation
export function passwordValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  // in crossfield validation, we will pass the whole form group in function parameter to get access of both fields like
  //in this case password and confirmPassword fields
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value != confirmPassword.value
    ? { mismatch: true }
    : null;
}
