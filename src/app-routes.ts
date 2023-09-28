import { Routes } from '@angular/router';
import { FormControlDemoComponent } from './containers/1-formcontrol-demo/formcontrol-demo.component';
import { FormgroupDemoComponent } from './containers/2-formgroup-demo/2-formgroup-demo.component';
import { BuiltInValidationComponent } from './containers/3-built-in-validation/3-built-in-validation.component';
import { CustomValidationComponent } from './containers/4-custom-validation/4-custom-validation.component';

export const appRoutes: Routes = [
  { path: 'form-control-demo', component: FormControlDemoComponent },
  { path: 'form-group-demo', component: FormgroupDemoComponent },
  { path: 'built-in-validation-demo', component: BuiltInValidationComponent },
  { path: 'custom-validation-demo', component: CustomValidationComponent },
];
