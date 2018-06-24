import { Component, OnInit } from '@angular/core';
import { CallerService } from '../../services/caller.service';
import { NavActiveService } from '../../services/nav-active.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  data = {};
  topics: any;

  constructor(
    private _call: CallerService
  ) { }

  ngOnInit() {
    let api = 'https://jsonplaceholder.typicode.com/posts/2';
    this._call.callApi(api).subscribe(
      data => {
        this.data = data;
        console.log(data);
      }
    )

    this.topics = {
      "count":4,
      "topics":
        [
          {
            "id": 1,
            "title": "Fun"
          },
          {
            "id": 2,
            "title": "Business"
          },
          {
            "id": 3,
            "title": "Psychology"
          },
          {
            "id": 4,
            "title": "HR"
          }
        ]
   };

  }


}
