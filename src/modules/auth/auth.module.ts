import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Route } from '@angular/router';

import { LoginComponent } from 'src/pages/auth/login/login.component';
import { RegisterComponent } from 'src/pages/auth/register/register.component';

const routes: Route[] = [
  {
    path: '/login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule]
})
export class AuthModule {}
