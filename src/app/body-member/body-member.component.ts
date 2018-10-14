import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-member',
  templateUrl: './body-member.component.html',
  styleUrls: ['./body-member.component.css']
})
export class BodyMemberComponent implements OnInit {

   shopid = '6c65114a-33fa-4c51-a90a-c51d814aba15';
   list = [
      // {
      //   'src': 'https://chart.googleapis.com/chart?cht=qr&chl=Hello=gff+world=fff&choe=UTF-8&chs=70x70',
      //   'shop_name': '01'
      // },
      // {
      //   'src': 'https://chart.googleapis.com/chart?cht=qr&chl=Hello=gff+world=fff&choe=UTF-8&chs=70x70',
      //   'shop_name': 'wayne'
      // }
   ];

  constructor() { }

  ngOnInit() {
  }

  addQRCode() {
    // const obj = {
    //   'src': `https://chart.googleapis.com/chart?cht=qr
    //   &chl=shop_id=${this.shopid}&shop_name=${$('#ShopName').val()}
    //   &choe=UTF-8&chs=70x70`,
    //   'shop_name': $('#ShopName').val()
    // };
    const liffUrl = `line://app/1604944812-5VpxB0lm/?location_id=${this.shopid}&location_name=${$('#ShopName').val()}`;
    const qrStr = ` https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${liffUrl}&choe=UTF-8`;
    const obj = {
      'src': qrStr,
      // 'src': `https://chart.googleapis.com/chart?cht=qr&chl=${$('#ShopName').val()}&choe=UTF-8&chs=70x70`,
      'shop_name': $('#ShopName').val()
    };
    this.list.push(obj);
    console.log(this.list);
  }
}
