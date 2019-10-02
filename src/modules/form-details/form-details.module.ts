import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDetailsComponent } from 'src/pages/form-details/form-details.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormArray} from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: FormDetailsComponent,
  },
];

@NgModule({
  declarations: [FormDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormDetailsModule { }
