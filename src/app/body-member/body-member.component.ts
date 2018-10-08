import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-member',
  templateUrl: './body-member.component.html',
  styleUrls: ['./body-member.component.css']
})
export class BodyMemberComponent implements OnInit {

  registerMode = false;
  constructor() { }

  ngOnInit() {
  }
  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}
