import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-top',
  templateUrl: './profile-top.component.html',
  styleUrls: ['./profile-top.component.scss']
})
export class ProfileTopComponent implements OnInit {

  data: any;
  seokey: String;

  constructor(private route: ActivatedRoute,) {
    this.route.params.subscribe(res => { this.seokey = res.seokey; });
  }

  ngOnInit() {
    this.data = {
      "id": 1,
      "name": "Pakalu Papito",
      "desc": "I'm sexy and I know it",
    };

  }

}
