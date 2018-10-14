import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify/alertify.service';
import { AjaxService } from '../_ajaxservice/ajax.service';

@Component({
  selector: 'app-body-queue-steptwo',
  templateUrl: './body-queue-steptwo.component.html',
  styleUrls: ['./body-queue-steptwo.component.css']
})
export class BodyQueueSteptwoComponent implements OnInit {

  baseUrl = 'https://mangeapi.azurewebsites.net/api/';

  val: any;
  displayname = '客人';
  constructor(
    private route: ActivatedRoute,
    private routing: Router,
    private alertify: AlertifyService,
    private ajax: AjaxService
  ) { }

  ngOnInit() {

    this.val =  this.route.params['value'].nextCount;
    this.displayname = localStorage.getItem('displayName');
    if (this.displayname) {
      this.alertify.message(`${this.displayname}，您的號碼是${this.val}號`);
    } else {
      this.alertify.message(`客人，您的號碼是${this.val}號`);
    }

  }

  SendFlexInfo() {
    this.ajax.postAsync( this.baseUrl + 'PushMessage/QueueNotify',
    {
      user_id: localStorage.getItem('liffId'),
      shop_id: localStorage.getItem('location_id'),
      queue_number: this.val,
      wait_time: '5分鐘',
      shop_name: this.displayname,
      counter_id: '01'
    })
    .then((data) => {
      console.log('ajax=' + data);
      if (this.displayname) {
        this.alertify.message(`${this.displayname}，請於Line中接收通知`);
      } else {
        this.alertify.message(`客人，請於Line中接收通知`);
      }
    });
  }

  SendReceiveInfo() {
    this.ajax.postAsync( this.baseUrl + 'QueueManage/ReceiveNotify',
    {
      'user_id': 'Ucf64da86af345f8a009970a62e24763a',
      'shop_id': localStorage.getItem('location_id'),
      'shop_name': localStorage.getItem('location_name'),
      'queue_number': this.val,
      'display_name': this.displayname
    })
    .then((data: string) => {
      console.log('ajax=' + data);
      // this.list = JSON.parse(data);
      if (this.displayname) {
        this.alertify.message(`${this.displayname}，請於Line中接收通知`);
      } else {
        this.alertify.message(`客人，請於Line中接收通知`);
      }
    });
  }
}
