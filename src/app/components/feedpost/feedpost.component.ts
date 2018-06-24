import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feedpost',
  templateUrl: './feedpost.component.html',
  styleUrls: ['./feedpost.component.scss']
})
export class FeedpostComponent implements OnInit {

  @Input() idea: any;

  constructor() { }

  ngOnInit() {
    console.log(this.idea);
  }

}
