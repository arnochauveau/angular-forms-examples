import { ValidatorFn } from "@angular/forms";

export const tastyFoodValidator: ValidatorFn = (formControl) => {
  if(formControl.value.toLowerCase() === 'coriander'){
    // the key is what will be put in the FormControl.errors property
    // instead of true you could also put some additional data in an object. See maxLength for an example.
    return {notTastyFood: true};
  }

  return null; //Value is valid 
} 