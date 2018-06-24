import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profiletopic-container',
  templateUrl: './profiletopic-container.component.html',
  styleUrls: ['./profiletopic-container.component.scss']
})
export class ProfiletopicContainerComponent implements OnInit {

  data: any;
  seokey: String;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(res => { this.seokey = res.seokey; });
  }

  ngOnInit() {
    this.data = [
      {
        "id": 1,
        "title": "Memes",
        "followers": 1000
      },
      {
        "id": 2,
        "title": "Deshbhakti",
        "followers": 10000
      },
      {
        "id": 3,
        "title": "Taimur",
        "followers": 10000000
      },
    ];
  }

}
