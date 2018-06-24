import { Injectable } from '@angular/core';
import { CallerService } from './caller.service';

@Injectable()
export class NavActiveService {

  topics: any;
  activeNav: any;

  constructor(private _call: CallerService) {
    //call discover topics api
    // this.topics = { 0: "a", 1: "b", 2: "c" };
    // this.activeNav = this.topics[0];
  }

  getActiveNav() {
    return this.activeNav;
  }

  setActiveNav(id) {
    this.activeNav = id;
    // alert(this.activeNav);
  }
}
