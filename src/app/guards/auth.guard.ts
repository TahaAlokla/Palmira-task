import { LocalStorageService } from './../services/local-storage.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private TokenStorageService: LocalStorageService , private router:Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
      // const url: string = route.path;
      // console.log('Url:'+ url);
      if (this.TokenStorageService.getToken()!==null) {
        console.log(this.TokenStorageService.getToken());

      console.log("success");

              return true;
      }
      // this.authService.setRedirectUrl(url);
      console.log("not auth ");

      this.router.navigate(['/login' ]);
      return false;
    }


}
