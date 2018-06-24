import { Component, OnInit } from '@angular/core';
import { CallerService } from '../../services/caller.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dummy = {};
  data = {};

  constructor(private _call: CallerService) { }

  ngOnInit() {
    let api = 'https://jsonplaceholder.typicode.com/posts/1';
    this._call.callApi(api).subscribe(
      data => {
        this.dummy = data;
        console.log(data);
      }
    )
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

  }
}
