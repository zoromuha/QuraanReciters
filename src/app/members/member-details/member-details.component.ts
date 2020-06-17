import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/User';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UserService } from 'src/app/_services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  user: User = new User();
  images: string[] = [];
  constructor( private alertify: AlertifyService , private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
        this.user = data.user;
              });
    this.getImages();
  }
  getImages() {
    for (const photo of this.user.photos) {
      this.images.push(photo.url);
    }
    console.log(this.images);
  }

}
