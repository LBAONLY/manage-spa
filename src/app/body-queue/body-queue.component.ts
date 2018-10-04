import { Component, OnInit } from '@angular/core';
declare var jquery: any; // 這邊用 var
declare let $: any;

@Component({
  selector: 'app-body-queue',
  templateUrl: './body-queue.component.html',
  styleUrls: ['./body-queue.component.css']
})
export class BodyQueueComponent implements OnInit {

  isOpen: false;
  list: any;
  AccIndex: any;
  locationId: string;
  // [ngClass.class2] = "( self_click  || other_click) && other_click"

  constructor() { }

  ngOnInit() {
    // alert('b-q');
    $(document).on('click', '.header-content', function() {
      alert('jq-left-click');
    });
    $(document).on('click', '.check-btn', function() {
      alert('jq-left-click');
    });
    // alert('b-q2');
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

