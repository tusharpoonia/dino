import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feedpost-container',
  templateUrl: './feedpost-container.component.html',
  styleUrls: ['./feedpost-container.component.scss']
})
export class FeedpostContainerComponent implements OnInit {

  @Input() postList;

  constructor() { }

  ngOnInit() {
    console.log(this.postList);
  }

}
