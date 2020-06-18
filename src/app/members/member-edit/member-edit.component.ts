import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { User } from 'src/app/_models/User';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
constructor(private userService: UserService, private authService: AuthService, private alertify: AlertifyService
   ,        private router: Router) { }
user: User = new User();
@ViewChild('editForm') editForm: NgForm;
@HostListener('window:beforeunload', ['$event'])
unloadNotification($event: any) {
if (this.editForm.dirty) {
  $event.returnValue = true;
}
}

ngOnInit() {
   this.userService.getUser(this.authService.decodeToken.nameid).subscribe((user: User) => {
    this.user = user;
   }, error => {
    this.alertify.error(error);
  });
  }
  updateUser() {
    console.log(this.user);
    this.userService.updateUser(this.authService.decodeToken.nameid,
       this.user).subscribe(user => {
         this.alertify.success('Updated Successfuly');
         this.editForm.reset(this.user);
     }, error => {
      this.alertify.error('Problem while updating user');
    });
  }

}
