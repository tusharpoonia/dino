import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profileuser-container',
  templateUrl: './profileuser-container.component.html',
  styleUrls: ['./profileuser-container.component.scss']
})
export class ProfileuserContainerComponent implements OnInit {

  userType = '';
  data: any;
  seokey: String;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(res => { this.seokey = res.seokey; });
  }

  ngOnInit() {
    this.route.url.subscribe(params => {
      if(typeof params[0] != 'undefined'){
        this.userType = params[0].path;
      }
    });
    console.log(this.userType);

    if(this.userType == 'followers'){
      this.data = [
        {
          "id": 1,
          "name": "Ghatotkach",
          "followers": 108
        },
        {
          "id": 2,
          "name": "Vibhishan",
          "followers": 12
        }
      ];
    } else if(this.userType == 'following'){
      this.data = [
        {
          "id": 3,
          "name": "Laila",
          "followers": 42000
        },
        {
          "id": 4,
          "name": "Heer",
          "followers": 1800
        }
      ];
    }
    //call api for followers/following
  }

}
