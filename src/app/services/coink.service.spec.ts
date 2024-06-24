/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoinkService } from './coink.service';

describe('Service: Coink', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinkService]
    });
  });

  it('should ...', inject([CoinkService], (service: CoinkService) => {
    expect(service).toBeTruthy();
  }));
});
