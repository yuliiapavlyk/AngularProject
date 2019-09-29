import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from '../pages/user-profile/user-profile.component';

const routes: Route[] = [
  {
    path: '',
    component: UserProfileComponent,
  },
];

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, RouterModule.forChild(routes),FormsModule,ReactiveFormsModule],
})
export class UserProfileModule {}
