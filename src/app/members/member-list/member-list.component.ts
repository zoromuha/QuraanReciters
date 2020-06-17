import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/User';
import { environment } from 'src/environments/environment';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
users: User[];
baseUrl = environment.baseUrl + 'Reciters/';

  constructor(private alertify: AlertifyService , private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.route.data.subscribe(data => {
     this.users = data.users;
   });
  }
}
