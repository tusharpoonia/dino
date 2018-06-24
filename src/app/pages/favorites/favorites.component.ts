import { Component, OnInit } from '@angular/core';
import { CallerService } from '../../services/caller.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  dummy = {};
  data: any;

  constructor(private _call: CallerService) { }

  ngOnInit() {
    let api = 'https://jsonplaceholder.typicode.com/posts/3';
    this._call.callApi(api).subscribe(
      data => {
        this.dummy = data;
        console.log(data);
      }
    )
    this.data = [
      {
        "id": 1,
        "title": "Oye Hoye",
        "desc": "kya baat hai!",
        "likes": 18,
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
      }
    ];
  }
}
