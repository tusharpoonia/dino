import { Component, OnInit } from '@angular/core';
import { CallerService } from '../../services/caller.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  data = {};

  constructor(private _call: CallerService) { }

  ngOnInit() {
    let api = 'https://jsonplaceholder.typicode.com/posts/4';
    this._call.callApi(api).subscribe(
      data => {
        this.data = data;
      }
    )
  }
}
