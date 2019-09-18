import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http';
import { UserService } from 'src/services/user.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector, private loginRout:Router) { }

  intercept(req, next){
    let userService=this.injector.get(UserService);
    if(userService){
      let tokenizedReq=req.clone({
        setHeaders:{
          Authorization: `Barber ${userService.getToken()}`
        }
      })
        return next.handle(tokenizedReq)
    }
    else{
      this.loginRout.navigate(['/login']);
      return 0;
    }

  }
}
