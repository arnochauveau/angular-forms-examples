import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-3-built-in-validation',
  templateUrl: './3-built-in-validation.component.html',
  styleUrls: ['./3-built-in-validation.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class BuiltInValidationComponent {
  // a formgroup is a collection of formControls that are tracked with a name.
  favoritesForm = new FormGroup({
    food: new FormControl('Vol au vent', Validators.required),
    number: new FormControl(42, {
      validators: [Validators.required, Validators.min(0)],
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
