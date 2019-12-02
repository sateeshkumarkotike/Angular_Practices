import { TestBed } from '@angular/core/testing';

import { SamplService } from './sampl.service';

describe('SamplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SamplService = TestBed.get(SamplService);
    expect(service).toBeTruthy();
  });
});
