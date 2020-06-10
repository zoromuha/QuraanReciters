import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 toggleMode = true;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  Toggle() {
    this.toggleMode = false;
  }
  CancelRegisterMode(registerMode: boolean ) {
    this.toggleMode = registerMode;
  }

}
