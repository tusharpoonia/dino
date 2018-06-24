import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-activitypost',
  templateUrl: './activitypost.component.html',
  styleUrls: ['./activitypost.component.scss']
})
export class ActivitypostComponent implements OnInit {

  @Input() post: any;
  constructor() { }

  ngOnInit() {
  }

}
