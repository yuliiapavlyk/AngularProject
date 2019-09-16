import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/pages/auth/login/login.component';
import { RegisterComponent } from 'src/pages/auth/register/register.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

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
