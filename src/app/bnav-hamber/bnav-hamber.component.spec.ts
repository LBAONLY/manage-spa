/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BnavHamberComponent } from './bnav-hamber.component';

describe('BnavHamberComponent', () => {
  let component: BnavHamberComponent;
  let fixture: ComponentFixture<BnavHamberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnavHamberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnavHamberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
