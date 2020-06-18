import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../_models/User';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MemberEditResolver implements Resolve<User> {

    constructor(private userService: UserService , private alertify: AlertifyService , private authService: AuthService ,
                private router: Router ) {}

    //         resolve(route: ActivatedRouteSnapshot): Observable < User > {
    //     return this.userService.getUser(this.authService.decodeToken.nameid).pipe(
    //         catchError(error => {
    //             this.alertify.error('Error getting your data');
    //             this.router.navigate(['/members']);
    //             return of(null);
    //         })
    //     )  ;
    // }
    resolve(route: ActivatedRouteSnapshot): Observable < User > {
        return;
    }

}
