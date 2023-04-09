import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the authorization token from local storage
    const authToken = localStorage.getItem('authToken');

    // Clone the request and add the authorization header if the token exists
    if (authToken) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`)
      });
      return next.handle(authReq);
    }

    // If there's no token, just pass the request through
    return next.handle(req);
  }

}