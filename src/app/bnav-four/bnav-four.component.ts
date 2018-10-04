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

  nextCount: any;
  nowCount: any;
  locationId: any;
  constructor( private alertify: AlertifyService
  , private router: Router
  , private ajax: AjaxService) { }

  ngOnInit() {
    this.ajax
    .postAsync('http://localhost:53599/api/QueueNumber/GetQueueNumber',
    {
      'shop_id': '01',
      'counter_id': '01'
    }
    )
    .then((data) => {
      this.nowCount = data;
      this.nextCount = this.nowCount;
      this.nextCount++;
    });
    // myBtn
    // $(document).on('click', '#myBtn', function() {
    //   $.ajax({
    //     type: 'post',
    //     url: 'http://linebootaward.azurewebsites.net/api/Queue/nextCall',
    //     data: {
    //       'company_id': '1'
    //     },
    //     success: function(data) {
    //       //  console.log('s-dget=' + JSON.stringify(data));
    //       //  console.log(data['get_number'][0]);
    //       console.log(data);
    //       // this.alertify.message('抽號成功');
    //     }
    //   });

    // });
    // $.ajax({
    //   type: 'post',
    //   url: 'http://linebootaward.azurewebsites.net/api/Queue/GetCard',
    //   data: {
    //     'company_id': '1' ,
    //     'customer_id': 'U02651d25e09b9e0cd129cca58477edbd'
    //   },
    //   success: function(data) {
    //     console.log('s-dget=' + JSON.stringify(data));
    //     //  console.log(data['get_number'][0]);
    //      $('.waitcount').children('.datatext').text(data['get_number'] + '號');
    //      $('.waittime').children('.datatext').text(data['wait_time'] + '分鐘');
    //   }
    // });
  }

  finger() {
    // $.ajax({
    //   type: 'post',
    //   url: 'http://linebootaward.azurewebsites.net/api/Queue/nextCall',
    //   data: {
    //     'company_id': '1'
    //   },
    //   success: function(data) {
    //     //  console.log('s-dget=' + JSON.stringify(data));
    //     //  console.log(data['get_number'][0]);
    //     console.log(data);
    //     $.ajax({
    //       type: 'post',
    //       url: 'http://linebootaward.azurewebsites.net/api/Queue/addUser',
    //       data: {
    //         'company_id': '1'
    //       },
    //       success: function(data2) {
    //         //  console.log('s-dget=' + JSON.stringify(data));
    //         //  console.log(data['get_number'][0]);
    //         console.log(data2);
    //         // this.alertify.message('抽號成功');
    //       }
    //     });
    //   }
    // });
    this.router.navigate(['/getnumber' , { 'nextCount': this.nextCount }]);
  }
}
