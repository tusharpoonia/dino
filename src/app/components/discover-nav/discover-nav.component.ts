import { Component, OnInit, Input } from '@angular/core';
import { NavActiveService } from '../../services/nav-active.service';

@Component({
  selector: 'app-discover-nav',
  templateUrl: './discover-nav.component.html',
  styleUrls: ['./discover-nav.component.scss']
})
export class DiscoverNavComponent implements OnInit {

  @Input() topics: any;
  activeNav: any;

  constructor() {}

  ngOnInit() {
    this.activeNav = this.topics.topics[0].id;
  }

  changeActiveNav(id){
    this.activeNav = id;
  }

}
