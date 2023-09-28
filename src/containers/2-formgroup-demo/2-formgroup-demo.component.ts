import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-2-formgroup-demo',
  templateUrl: './2-formgroup-demo.component.html',
  imports: [ReactiveFormsModule],
})
export class FormgroupDemoComponent {
  // a formgroup is a collection of formControls that are tracked with a name.
  favoritesForm = new FormGroup({
    food: new FormControl('Vol au vent'),
    number: new FormControl(42),
  });

  beWrong() {
    // An easy way to change a formControl's value is the patchValue function,
    // this will only change the FormControl's values you provided.
    // this one is also the easiest way to prefill default values that come from an async source.
    // this will result in a value of {food: 'Coriander', number: 42}
    this.favoritesForm.patchValue({ food: 'Coriander' });
  }
}
