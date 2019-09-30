import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopSectionComponent } from 'src/pages/top-section/top-section.component';

@NgModule({
  declarations: [TopSectionComponent],
  imports: [
    CommonModule
  ],
  exports: [TopSectionComponent]
})
export class TopSectionModule { }
