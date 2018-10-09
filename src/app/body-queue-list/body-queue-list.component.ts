import { Component, OnInit } from '@angular/core';
import { getAsync , postAsync } from '../_extension_module/js_module/AjaxModule';
import { FormsModule } from '@angular/forms';
import { AjaxService } from '../_ajaxservice/ajax.service';
import { AlertifyService } from '../_services/alertify/alertify.service';
declare var componentHandler: any;

@Component({
  selector: 'app-body-queue-list',
  templateUrl: './body-queue-list.component.html',
  styleUrls: ['./body-queue-list.component.css']
})

export class BodyQueueListComponent implements OnInit {

  baseUrl = 'https://mangeapi.azurewebsites.net/api/';
  isOpen: false;
  AccIndex: any;
  locationId: string;
  waiting_number: any;

  list: any;

  constructor(
    private ajax: AjaxService,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {

    this.locationId = '1';
    $(document).on('click', '.accordion', function() {
      if (!$(this).hasClass('Accactive')) {
        $(this).children('.panel').css('display', 'block');
        $(this).addClass('Accactive');
      } else {
        $(this).removeClass('Accactive');
        $(this).children('.panel').css('display', 'none');
      }
    });
    this.getQueueList();
    // this.list = [
    //   {
    //     'user_id': 'id1',
    //     'number': '01',
    //     'displayname': 'wayne'
    //   },
    //   {
    //     'user_id': 'id2',
    //     'number': '02',
    //     'displayname': 'wayne'
    //   },
    //   {
    //     'user_id': 'id3',
    //     'number': '03',
    //     'displayname': 'wayne'
    //   },
    //   {
    //     'user_id': 'id4',
    //     'number': '04',
    //     'displayname': 'wayne'
    //   }
    // ];
  }
  open() {
    alert('s');
  }

  openAccordion($event) {
    // this.AccIndex = $event.
    console.log('click');
    console.log($event);
  }

  removeList() {
      if (typeof(this.list[0]) !== 'undefined' && this.list[0].length !== null) {
        this.updateQueueList();
        this.list.shift();
        this.set_waitingInfo();
      } else {
        this.alertify.error('目前沒有叫號的客人喔!');
      }
  }

  set_waitingInfo() {
    // alert(this.list[0].numbers);
    this.waiting_number = this.list[0].queue_number;
  }

  getQueueList() {

    this.ajax.postAsync( this.baseUrl + 'QueueManage/getQueueList',
    {
      // localStorage.getItem('location_id')
      shop_id: '01',
      counter_id: '01'
    })
    .then((data: string) => {
      console.log('ajax=' + data);
      this.list = JSON.parse(data);
      this.set_waitingInfo();
    });

  }

  updateQueueList() {

    this.ajax.postAsync( this.baseUrl + 'QueueManage/UpdateQueueList',
    {
      'user_id': 'Ucf64da86af345f8a009970a62e24763a',
      'shop_id': localStorage.getItem('location_id'),
      'shop_name': localStorage.getItem('location_name'),
      'queue_number': this.list[0].queue_number,
      'display_name': this.list[0].display_name
    })
    .then((data: string) => {
      console.log('ajax=' + data);
      // this.list = JSON.parse(data);
      this.set_waitingInfo();
    });

  }
  // init_regist_MDL_Component() {
  //   // 重新註冊mdl元件，否則失效
  //   componentHandler.upgradeAllRegistered();
  // }

}
