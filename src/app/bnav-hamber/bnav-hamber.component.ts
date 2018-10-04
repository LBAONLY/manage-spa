import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bnav-hamber',
  templateUrl: './bnav-hamber.component.html',
  styleUrls: ['./bnav-hamber.component.css']
})
export class BnavHamberComponent implements OnInit {

  val: any;
  constructor(private route: ActivatedRoute,
    private routing: Router) { }

  ngOnInit() {
   this.val =  this.route.params['value'].nextCount;
  //  alert(this.val);
  }
  NavToLine() {
    alert('click');
    this.routing.navigate(['https://line.me/R/ti/p/%40tlf2414x']);
  }
}
