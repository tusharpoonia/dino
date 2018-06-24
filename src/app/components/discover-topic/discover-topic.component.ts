import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-discover-topic',
  templateUrl: './discover-topic.component.html',
  styleUrls: ['./discover-topic.component.scss']
})
export class DiscoverTopicComponent implements OnInit {

  @Input() subtopic: any;

  constructor() { }

  ngOnInit() {
  }

}
