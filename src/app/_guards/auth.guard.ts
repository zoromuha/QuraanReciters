import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private alertify: AlertifyService, private router: Router) {
  }
  canActivate(  ): boolean {
    if (this.authService.LoggedIn()) {
      return true;
    }
    this.router.navigate(['/home']);
    this.alertify.error('Your are not authorized.');
    return false;
  }
  /**
   *
   */


}
