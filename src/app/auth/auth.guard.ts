
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authRef: AngularFireAuth) { }
  private router: Router

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authRef.authState
      .take(1)
      .map(m => !!m)
      .do(async loadIn => {
        if (loadIn) {
          return true;
        }
       this.router.navigate(['/category']), {queryParams: { returnUrl: state.url }
        }
        return false;
      });
  }

}
