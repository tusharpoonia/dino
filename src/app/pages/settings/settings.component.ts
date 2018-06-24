import { Component, OnInit } from '@angular/core';
import { CallerService } from '../../services/caller.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  data = {};

  constructor(private _call: CallerService) { }

  ngOnInit() {
    let api = 'https://jsonplaceholder.typicode.com/posts/5';
    this._call.callApi(api).subscribe(
      data => {
        this.data = data;
        console.log(data);
      }
    )
  }
}
