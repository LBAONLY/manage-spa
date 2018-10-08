import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  displayName = 'XX店家';

  constructor(
    private routing: ActivatedRoute
    ) { }

  ngOnInit() {
    this.init_setHeaderName();
  }

  lineclick() {
    alert('sss');
  }

  init_setHeaderName() {
    if (localStorage.getItem('location_name')) {
      this.displayName = localStorage.getItem('location_name');
    }
    this.routing.queryParams.subscribe((value) => {
      if (typeof(value['location_id']) !== 'undefined') {
        this.displayName = value['location_name'];
        localStorage.setItem('location_name', this.displayName);
        // alert(this.displayName);
      }
    });
  }
}
