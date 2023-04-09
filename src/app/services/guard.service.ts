import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from './localStorage.service';

@Injectable({
  providedIn: 'root' 
})
export class IdGuard implements CanActivate {
  constructor(private localStorageService: LocalStorageService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id = this.localStorageService.get('authToken');
    if (id) {
      return true;
    }
    return this.router.createUrlTree(['/home-cat']);
  }
}

@Injectable({
    providedIn: 'root' 
  })
export class IdGuardReverse implements CanActivate {
    constructor(private localStorageService: LocalStorageService, private router: Router) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const id = this.localStorageService.get('authToken');
      if (!id) {
        return true;
      }
      return this.router.createUrlTree(['/info-cat']);
    }
  }