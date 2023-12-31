import { TestBed } from '@angular/core/testing';

import { MaleNamesService } from './male-names.service';

describe('MaleNamesService', () => {
  let service: MaleNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaleNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
