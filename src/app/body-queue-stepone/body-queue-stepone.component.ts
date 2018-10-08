import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify/alertify.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AjaxService } from '../_ajaxservice/ajax.service';

@Component({
  selector: 'app-body-queue-stepone',
  templateUrl: './body-queue-stepone.component.html',
  styleUrls: ['./body-queue-stepone.component.css']
})
export class BodyQueueSteponeComponent implements OnInit {

  baseUrl = 'https://mangeapi.azurewebsites.net/api/';

  // 預設值
  query_location_id = '01';
  query_location_name = 'XX店家';
  query_counter_id = '01';

  user_id: any;
  displayname: any;
  nextCount: any;
  nowCount: any;

  constructor(
    private alertify: AlertifyService,
    private router: Router,
    private routing: ActivatedRoute,
    private ajax: AjaxService
  ) { }

  ngOnInit() {

    this.init_getQueryStringParams();
    this.init_getQueueNumber();
    this.init_botMessage();

  }

  finger() {

    if (localStorage.getItem('liffId')) {
      this.user_id = localStorage.getItem('liffId');
      // alert(this.user_id);
    } else {
      this.user_id = 'testId';
      alert(this.user_id);
    }

    this.ajax.postAsync(this.baseUrl + 'QueueNumber/AddCustomerInQueue',
    {
      user_id : this.user_id,
      shop_id : this.query_location_id,
      counter_id : this.query_counter_id
    })
    .then((data) => {
      console.log('data=' + data);
      this.nextCount = data;
    }).catch((err) => {
      console.log('fail', err);
    });
    this.router.navigate(['/newqueue/steptwo' , { 'nextCount': this.nextCount }]);
  }

  init_getQueryStringParams() {

    this.routing.queryParams.subscribe((value) => {
      if (typeof(value['location_id']) !== 'undefined') {
        this.query_location_id = value['location_id'];
        this.query_location_name = value['location_name'];
        localStorage.setItem('location_id', this.query_location_id);
        localStorage.setItem('location_name', this.query_location_name);
        // alert(this.query_location_name);
      }
    });

  }

  init_botMessage() {

    this.displayname = localStorage.getItem('displayName');

    if (this.displayname) {
        this.alertify.message(`您好!  &nbsp;${this.displayname}，抽取號碼牌吧!`);
    } else {
      this.alertify.message(`您好! &nbsp; 客人，抽取號碼牌吧!`);
    }

  }

  init_getQueueNumber() {

    this.ajax.postAsync( this.baseUrl + 'QueueNumber/GetQueueNumber',
    {
      shop_id: this.query_location_id,
      counter_id: this.query_counter_id
    })
    .then((data) => {
      console.log('ajax=' + data);
      this.nowCount = data;
      this.nextCount = this.nowCount;
      this.nextCount++;
    });

  }

}
