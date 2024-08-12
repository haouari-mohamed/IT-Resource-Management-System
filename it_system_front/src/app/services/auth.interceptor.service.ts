/* import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.getToken(); 

    if (token) {
      const clonedRequest = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      console.log("Interceptor is adding the token");
      return next.handle(clonedRequest);
    }
    
    console.log("Interceptor is passing the request without token");
    return next.handle(req);
  }

  getToken(): string {
    return 'your-auth-token';
  }
} */
