import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bnav-hamber',
  templateUrl: './bnav-hamber.component.html',
  styleUrls: ['./bnav-hamber.component.css']
})
export class BnavHamberComponent implements OnInit {

  val: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   this.val =  this.route.params['value'].nextCount;
  //  alert(this.val);
  }

}
