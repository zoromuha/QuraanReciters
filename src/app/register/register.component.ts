import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { User } from '../_models/User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Output() valueFromChild = new EventEmitter() ;
bsConfig: Partial<BsDatepickerConfig>;

  user: User ;
  registerationForm: FormGroup ;

  constructor(private authService: AuthService , private alertify: AlertifyService, private router: Router
    ,         private fb: FormBuilder) { }

  ngOnInit() {
  this.CreateRegisterForm();
  this.bsConfig = {
    containerClass: 'theme-blue',
  };
  }
  PasswordComparer(g: FormGroup) {
   return g.get('password').value === g.get('confirmPassword').value ?
   null : {mismatch: true};
  }

  CreateRegisterForm() {
    this.registerationForm = this.fb.group({
      gender: ['male', Validators.required],
      knownAs: ['', Validators.required],
      dateOfBirth: [null, Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.PasswordComparer
    });
  }
  Register() {
    if (this.registerationForm.valid) {
      this.user = Object.assign({}, this.registerationForm.value);
      this.authService.register(this.user).subscribe(() => {
        this.alertify.success('Tmam');
      }, error => {
    this.alertify.error(error);
      }, () => {
        this.authService.login(this.user).subscribe(() => {
          this.router.navigate(['/members']);
        });
      });
    }

  }
  Cancel() {
    this.valueFromChild.emit(true);
  }


}
