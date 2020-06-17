import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/User';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
user: User = new User();
constructor(private userService: UserService, private authService: AuthService, private alertify: AlertifyService
   ,        private router: Router) { }

ngOnInit() {
   this.userService.getUser(this.authService.decodeToken.nameid).subscribe((user: User) => {
    this.user = user;
   }, error => {
    this.alertify.error(error);
  });
  }

}
