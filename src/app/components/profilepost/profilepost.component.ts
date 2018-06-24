import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profilepost',
  templateUrl: './profilepost.component.html',
  styleUrls: ['./profilepost.component.scss']
})
export class ProfilepostComponent implements OnInit {

  @Input() idea: any;

  constructor() { }

  ngOnInit() {
  }

}
