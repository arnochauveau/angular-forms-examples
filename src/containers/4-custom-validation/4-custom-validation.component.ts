import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { numberIsBetweenValidator } from './number-is-between.validator';
import { tastyFoodValidator } from './tasty-food.validator';

@Component({
  selector: 'app-4-custom-validation',
  templateUrl: './4-custom-validation.component.html',
  styleUrls: ['./4-custom-validation.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class CustomValidationComponent {
  // a formgroup is a collection of formControls that are tracked with a name.
  favoritesForm = new FormGroup({
    food: new FormControl('Vol au vent', [
      Validators.required,
      tastyFoodValidator,
    ]),
    number: new FormControl(42, {
      validators: [Validators.required, numberIsBetweenValidator(0, 100)],
    }),
  });

  beWrong() {
    // An easy way to change a formControl's value is the patchValue function,
    // this will only change the FormControl's values you provided.
    // this one is also the easiest way to prefill default values that come from an async source.
    // this will result in a value of {food: 'Coriander', number: 42}
    this.favoritesForm.patchValue({ food: 'Coriander' });
  }

  submit() {
    // checking form validness on formGroups is especially useful before submitting a form.
    if (this.favoritesForm.valid) {
      console.log(this.favoritesForm.value);
    } else {
      console.log('Invalid form!');
    }
  }
}
