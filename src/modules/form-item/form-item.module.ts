import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormItemComponent } from 'src/pages/form-item/form-item.component';

@NgModule({
  declarations: [FormItemComponent],
  imports: [
    CommonModule
  ],
  exports: [FormItemComponent]
})
export class FormItemModule { }
