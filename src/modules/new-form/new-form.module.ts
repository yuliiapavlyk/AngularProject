import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { NewFormComponent } from 'src/pages/new-form/new-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: NewFormComponent,
  },
];

@NgModule({
  declarations: [NewFormComponent],
  imports: [CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule],

})
export class NewFormModule {

 }
