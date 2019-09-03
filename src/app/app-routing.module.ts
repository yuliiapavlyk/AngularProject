import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/pages/auth/login/login.component';
import { RegisterComponent } from 'src/pages/auth/register/register.component';
import { DashboardComponent } from 'src/pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('src/modules/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      {
      path: 'user-profile',
        loadChildren: () =>
          import('src/modules/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
        },
        {
          path: 'my-forms',
            loadChildren: () =>
              import('src/modules/forms/forms.module').then(
                (m) => m.FormsModule
              ),
            },
            {
              path: 'new-form',
                loadChildren: () =>
                  import('src/modules/new-form/new-form.module').then(
                    (m) => m.NewFormModule
                  ),
                },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
