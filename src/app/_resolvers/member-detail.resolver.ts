import { Injectable } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/User';
import { UserService } from '../_services/user.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
/**
 *
 */export class MemberDetailResolver implements Resolve<User> {
constructor(private alertify: AlertifyService, private userService: UserService , private router: Router ) {}
resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser(route.params.id).pipe(
        catchError(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/members']);
            return of(null) ;
        })
    );
}
 }
