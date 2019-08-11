import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from 'src/pages/header/header.component';
import { from } from 'rxjs';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
