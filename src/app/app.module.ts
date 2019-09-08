import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from 'src/modules/products/products.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { DashboardModule } from 'src/modules/dashboard/dashboard.module';
import { FormsModule } from 'src/modules/forms/forms.module';
import { UserModule } from 'src/modules/user/user.module';
import { UserService } from 'src/services/user.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    ProductsModule,
    FormsModule,
    UserModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
