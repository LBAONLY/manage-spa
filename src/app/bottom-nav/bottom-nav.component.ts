import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify/alertify.service';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css']
})
export class BottomNavComponent implements OnInit {

  bnav_icon_1 = true;
  bnav_icon_2 = false;
  bnav_icon_3 = false;
  bnav_icon_4 = false;
  bnav_icon_5 = false;

  constructor(
    private alertify: AlertifyService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ActiveStyle($event) {
    // console.log($($event.target).attr('data-icon'));
    console.log('js=' + $event.target.dataset.icon);
    switch ($event.target.dataset.icon) {

      case '1':
          this.bnav_icon_1 = true;
          this.bnav_icon_2 = false;
          this.bnav_icon_3 = false;
          this.bnav_icon_4 = false;
          this.bnav_icon_5 = false;
        break;

      case '2':
          this.bnav_icon_1 = false;
          this.bnav_icon_2 = true;
          this.bnav_icon_3 = false;
          this.bnav_icon_4 = false;
          this.bnav_icon_5 = false;
        break;

      case '3':
          this.bnav_icon_1 = false;
          this.bnav_icon_2 = false;
          this.bnav_icon_3 = true;
          this.bnav_icon_4 = false;
          this.bnav_icon_5 = false;
        break;

      case '4':
          this.bnav_icon_1 = false;
          this.bnav_icon_2 = false;
          this.bnav_icon_3 = false;
          this.bnav_icon_4 = true;
          this.bnav_icon_5 = false;
        break;

      case '5':
          this.bnav_icon_1 = false;
          this.bnav_icon_2 = false;
          this.bnav_icon_3 = false;
          this.bnav_icon_4 = false;
          this.bnav_icon_5 = true;
        break;

      default:
        break;
    }
  }
}
