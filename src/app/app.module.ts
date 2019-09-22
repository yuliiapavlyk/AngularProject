import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,   HTTP_INTERCEPTORS}   from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from 'src/modules/products/products.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { DashboardModule } from 'src/modules/dashboard/dashboard.module';
import { FormsModuleM } from 'src/modules/forms/forms.module';
import { TokenInterceptorService } from 'src/services/token-interceptor.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from "@ngrx/effects";


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
    BrowserModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    HttpClientModule,
  ],
  providers: [TokenInterceptorService, {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
