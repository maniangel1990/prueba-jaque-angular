import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Guard1Guard implements CanActivate {

  constructor(private router: Router){}

  redirect(flag: boolean): any {
    if (!flag) {
      this.router.navigate(['/', 'login'])
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const accesToken = localStorage.getItem('accesToken') ? true : false;
    this.redirect(accesToken);
    return accesToken;
  }
  
}
