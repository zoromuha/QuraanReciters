import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Output() valueFromChild = new EventEmitter() ;
  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  Register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('Succeded registered');

    }, error =>
    {
      console.log(error);
    }
    );
  }
  Cancel() {
    this.valueFromChild.emit(true);
    console.log('Cancelled');
  }


}
