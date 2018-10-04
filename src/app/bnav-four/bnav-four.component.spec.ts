/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BnavFourComponent } from './bnav-four.component';

describe('BnavFourComponent', () => {
  let component: BnavFourComponent;
  let fixture: ComponentFixture<BnavFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnavFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnavFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
