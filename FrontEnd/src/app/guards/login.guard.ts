import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const cookie = document.cookie;
  const isLogin = cookie.replace('isLogin=', '');
  console.log(isLogin,cookie)
  if (isLogin) {
    return true;
  }

  return router.createUrlTree(['login'])
};
