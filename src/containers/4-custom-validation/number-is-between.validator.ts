import { ValidatorFn, Validators } from '@angular/forms';

export const numberIsBetween0And100Validator = Validators.compose([
  Validators.min(0),
  Validators.max(100),
]);

// you can also make it dynamic
export const numberIsBetweenValidator = (
  min: number,
  max: number
): ValidatorFn =>
  Validators.compose([Validators.min(min), Validators.max(max)])!;
