import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-discovertopic-container',
  templateUrl: './discovertopic-container.component.html',
  styleUrls: ['./discovertopic-container.component.scss']
})
export class DiscovertopicContainerComponent implements OnInit {

  @Input () activeNav: any;
  data: any;
  constructor() { }

  ngOnInit() {}

  ngOnChanges(){
    switch(this.activeNav){
      case 1: this.data =
        {
          "count": 3,
          "subtopics": [
            {
              "id": 1,
              "title": "Memes",
              "followers": 1000,
              "isFollowing": 1 //node to be added in all users, posts (liked), topics
            },
            {
              "id": 2,
              "title": "Cartoons",
              "followers": 1300,
              "isFollowing": 0
            },
            {
              "id": 3,
              "title": "Comics",
              "followers": 6300,
              "isFollowing": 1
            },
          ]
        }
        break;
      case 2: this.data =
        {
          "count": 3,
          "subtopics": [
            {
              "id": 1,
              "title": "LALA",
              "followers": 1000,
              "isFollowing": 1 //node to be added in all users, posts (liked), topics
            },
            {
              "id": 2,
              "title": "KAKA",
              "followers": 1300,
              "isFollowing": 0
            },
            {
              "id": 3,
              "title": "GAGA",
              "followers": 6300,
              "isFollowing": 1
            },
          ]
        }
        break;
      case 3: this.data =
        {
          "count": 3,
          "subtopics": [
            {
              "id": 1,
              "title": "toto",
              "followers": 1000,
              "isFollowing": 1 //node to be added in all users, posts (liked), topics
            },
            {
              "id": 2,
              "title": "lulu",
              "followers": 1300,
              "isFollowing": 0
            },
            {
              "id": 3,
              "title": "zuzu",
              "followers": 6300,
              "isFollowing": 1
            },
          ]
        }
        break;
      default: this.data = {}
    }
  }

}
