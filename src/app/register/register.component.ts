import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Output() valueFromChild = new EventEmitter() ;
  model: any = {};
  constructor(private authService: AuthService ,private alertify: AlertifyService) { }

  ngOnInit() {
  }
  Register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('Succeded registered');

    }, error =>
    {
      this.alertify.error(error);
    }
    );
  }
  Cancel() {
    this.valueFromChild.emit(true);
  }


}
