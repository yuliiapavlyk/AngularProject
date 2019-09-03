import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddFormComponent } from 'src/pages/add-form/add-form.component';

@NgModule({
  declarations: [AddFormComponent],
  imports: [
    CommonModule
  ],
  exports:[AddFormComponent]
})
export class AddFormModule { }
