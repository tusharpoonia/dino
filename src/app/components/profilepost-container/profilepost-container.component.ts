import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profilepost-container',
  templateUrl: './profilepost-container.component.html',
  styleUrls: ['./profilepost-container.component.scss']
})
export class ProfilepostContainerComponent implements OnInit {

  feedType = 'public';
  data: any;
  seokey: String;

  constructor(private route: ActivatedRoute,) {
    this.route.params.subscribe(res => { this.seokey = res.seokey; });
  }

  ngOnInit() {
    this.route.url.subscribe(params => {
      if (typeof params[0] != 'undefined') {
        this.feedType = params[0].path;
      }
    });
    console.log(this.feedType);
    if (this.feedType == 'public') {
      this.data = [
        {
          "id": 1,
          "title": "Waah",
          "desc": "bhai saab!",
          "likes": 1800,
          "comments": 50,
          "visibility": "public"
        },
        {
          "id": 2,
          "title": "Aunty",
          "desc": "chai peelo!",
          "likes": 9999,
          "comments": 500,
          "visibility": "public"
        },{
          "id": 3,
          "title": "Nagarpalika",
          "desc": "bhai bhai bhai!",
          "likes": 1001,
          "comments": 80,
          "visibility": "public"
        },
      ];
    } else if (this.feedType == 'private') {
      this.data = [
        {
          "id": 4,
          "title": "Aunty",
          "desc": "ye bik gayi hai!",
          "visibility": "private"
        },
        {
          "id": 5,
          "title": "Hmm",
          "desc": "gormint!",
          "visibility": "private"
        },{
          "id": 6,
          "title": "Avengers",
          "desc": "i am groot!",
          "visibility": "private"
        },
      ];

    }
  }

}
