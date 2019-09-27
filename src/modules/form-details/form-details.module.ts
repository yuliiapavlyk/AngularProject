import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDetailsComponent } from 'src/pages/form-details/form-details.component';
import { Route, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { formReducer } from 'src/store/reducers/form.reducer';
import { Effect, Actions, EffectsModule } from "@ngrx/effects";
import { FormsEffect } from 'src/store/effects/form.effects';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

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
    StoreModule.forFeature('forms', formReducer),
    EffectsModule.forFeature([FormsEffect]),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormDetailsModule { }
