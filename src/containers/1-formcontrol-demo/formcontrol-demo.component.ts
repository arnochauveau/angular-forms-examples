import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  templateUrl: './formcontrol-demo.component.html',
  imports: [ReactiveFormsModule],
})
export class FormControlDemoComponent {
  /* 
    a new FormControl instance is made.
    we can provide a default value as the first parameter.
    The type of the default value will be inferred 
    this means for this example that 
    favoriteFoodControl will be of type FormControl<string>
  */
  favoriteFoodControl = new FormControl('Vol au vent');

  beWrong() {
    // we can programatically set the value of a formcontrol using the instance's setValue function
    this.favoriteFoodControl.setValue('Coriander');
  }
}
