/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LiffService } from './liff.service';

describe('Service: Liff', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LiffService]
    });
  });

  it('should ...', inject([LiffService], (service: LiffService) => {
    expect(service).toBeTruthy();
  }));
});
