import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify/alertify.service';
import { Router } from '@angular/router';
import { AjaxService } from '../_ajaxservice/ajax.service';

@Component({
  selector: 'app-bnav-four',
  templateUrl: './bnav-four.component.html',
  styleUrls: ['./bnav-four.component.css']
})
export class BnavFourComponent implements OnInit {

  // dev
  // baseUrl = 'http://localhost:53599/api/';
  // prod
  baseUrl = 'https://mangeapi.azurewebsites.net/api/';
  displayname: any;
  nextCount: any;
  nowCount: any;
  locationId: any;
  constructor( private alertify: AlertifyService
  , private router: Router
  , private ajax: AjaxService) { }

  ngOnInit() {
    this.ajax.postAsync( this.baseUrl + 'QueueNumber/GetQueueNumber',
    {
      shop_id: '01',
      counter_id: '01'
    })
    .then((data) => {
      console.log('ajax=' + data);
      this.nowCount = data;
      this.nextCount = this.nowCount;
      this.nextCount++;
    });

   this.displayname = localStorage.getItem('displayName');
  }

  finger() {
    this.router.navigate(['/getnumber' , { 'nextCount': this.nextCount }]);
  }
}
