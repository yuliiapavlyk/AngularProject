import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from 'src/modules/products/products.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { DashboardModule } from 'src/modules/dashboard/dashboard.module';
import { FormsModuleM } from 'src/modules/forms/forms.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,   HTTP_INTERCEPTORS}   from '@angular/common/http';
import { TokenInterceptorService } from 'src/services/token-interceptor.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    ProductsModule,
    FormsModuleM,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [TokenInterceptorService, {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
