import { TestBed } from '@angular/core/testing';

import { Automotor } from './automotor';

describe('Automotor', () => {
  let service: Automotor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Automotor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
