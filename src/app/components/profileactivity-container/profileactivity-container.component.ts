import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profileactivity-container',
  templateUrl: './profileactivity-container.component.html',
  styleUrls: ['./profileactivity-container.component.scss']
})
export class ProfileactivityContainerComponent implements OnInit {

  data: any;
  seokey: String;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(res => { this.seokey = res.seokey; });
  }

  ngOnInit() {
    this.data = [
      {
        "activity": "followed",
        "type": "topic",
        "id":1,
        "title": "Memes",
        "followers": 1000
      },
      {
        "activity": "followed",
        "type": "user",
        "id": 100,
        "name": "Sardar Khan",
        "followers": 11000
      },
      {
        "activity": "liked",
        "type": "post",
        "id": 4,
        "title": "Why this Kolaveri di",
        "desc": "Pae pae pae pae...pae pae pae paeee",
        "likes": 1100,
        "comments": 70
      },
      {
        "activity": "commented",
        "type": "post",
        "id": 46,
        "title": "That's why this Kolaveri di",
        "desc": "Girl heart black",
        "likes": 11,
        "comments": 2
      },
    ]
  }

}
