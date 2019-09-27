import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormItemComponent } from 'src/pages/form-item/form-item.component';
import { Route, RouterModule } from '@angular/router';
import { FormItemModule } from '../form-item/form-item.module';
import { MyformComponent } from 'src/pages/myform/myform.component';
import { AddFormModule } from '../add-form/add-form.module';
import { AddFormComponent } from 'src/pages/add-form/add-form.component';
import { TopSectionModule } from '../top-section/top-section.module';
import { TopSectionComponent } from 'src/pages/top-section/top-section.component';
const routes: Route[] = [
  {
    path: '',
    component: MyformComponent,
  },
];
@NgModule({
  declarations: [MyformComponent],
  imports: [
    CommonModule,
    FormItemModule,
    AddFormModule,
    TopSectionModule,
    RouterModule.forChild(routes)
  ],
  exports:[FormItemComponent, AddFormComponent, TopSectionComponent]
})
export class FormsModuleM { }
