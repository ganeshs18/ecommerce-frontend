import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {
  isAuthenticated: boolean;
  constructor(private router: Router) { }

  canActivate(): boolean | UrlTree {
    if (this.isAuthenticated) {
      return true;
    }
    else {
      return this.router.parseUrl('/auth');
    }
  }

  
}
