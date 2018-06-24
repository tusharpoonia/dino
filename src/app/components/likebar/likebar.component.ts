import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-likebar',
  templateUrl: './likebar.component.html',
  styleUrls: ['./likebar.component.scss']
})
export class LikebarComponent implements OnInit {

  @Input() id;

  constructor() { }

  ngOnInit() {
  }

  lala(){
    alert(this.id);
  }

}
