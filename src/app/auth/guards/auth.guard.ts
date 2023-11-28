import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MyserviceService } from '../services/myservice.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(MyserviceService);
  const router = inject(Router);
  if (!authService.isLogin()) {
    router.navigate(['/login']);
    return false;
  } else {
    return true;
  }
};