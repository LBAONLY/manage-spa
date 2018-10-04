import { Component, OnInit } from '@angular/core';
import { getAsync , postAsync } from '../_extension_module/js_module/AjaxModule';
import { FormsModule } from '@angular/forms';
import { AjaxService } from '../_ajaxservice/ajax.service';

@Component({
  selector: 'app-body-queue-list',
  templateUrl: './body-queue-list.component.html',
  styleUrls: ['./body-queue-list.component.css']
})

export class BodyQueueListComponent implements OnInit {

  isOpen: false;
  list: any;
   AccIndex: any;
  locationId: string;
  // list: any =  [
  //   {
  //     'user_id': 'id1',
  //     'number': '01',
  //     'name': 'wayne'
  //   },
  //   {
  //     'user_id': 'id2',
  //     'number': '02',
  //     'name': 'wayne'
  //   },
  //   {
  //     'user_id': 'id3',
  //     'number': '03',
  //     'name': 'wayne'
  //   },
  //   {
  //     'user_id': 'id4',
  //     'number': '04',
  //     'name': 'wayne'
  //   }
  // ];

  constructor(private ajax: AjaxService) { }

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

    // $.ajax({
    //   type: 'post',
    //   url: 'http://linebootaward.azurewebsites.net/api/Queue/GetWaitList',
    //   data: {'company_id': this.locationId },
    //   success: function(data) {
    //      console.log('s-dget=' + JSON.stringify(data));
        //  this.list = data['cards'];
        //  this.list.push(data['cards'][0]);
        // this.list = [
        //     {
        //       'user_id': 'id1',
        //       'number': '01',
        //       'name': 'wayne'
        //     },
        //     {
        //       'user_id': 'id2',
        //       'number': '02',
        //       'name': 'wayne'
        //     },
        //     {
        //       'user_id': 'id3',
        //       'number': '03',
        //       'name': 'wayne'
        //     },
        //     {
        //       'user_id': 'id4',
        //       'number': '04',
        //       'name': 'wayne'
        //     }
        //   ];
        //  console.log( JSON.stringify(data['cards']));
        //  console.log('LIST-' + this.list[0].user_id);
    //   }
    // });
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
    // get first object then send ajax()
    // $.ajax({
    //   type: 'POST',
    //   datatype: 'json',
    //   contentType: 'application/json; charset=utf-8',
    //   url: 'http://linebootaward.azurewebsites.net/api/Queue/GetWaitList',
    //   data: {'user_id': this.list[0].user_id , 'queue_id': this.locationId },
    //   success: function(data) {
    //      alert('s-delete');
    //   }
    // });
    alert( 'number1=' + this.list[0].number);
    this.list.shift();
    alert( 'number2=' + this.list[0].number);
  }

}
