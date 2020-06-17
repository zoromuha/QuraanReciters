import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { User } from '../_models/User';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class MemberListResolver implements Resolve<User[]> {
    constructor(private alertifyService: AlertifyService , private router: Router, private user: UserService ) {
    }
    resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
        return this.user.getUsers().pipe(
            catchError(error => {
                this.alertifyService.error('Error Getting Data');
                this.router.navigate(['/home']);
                return of (null);
            })
        );

    }
}
