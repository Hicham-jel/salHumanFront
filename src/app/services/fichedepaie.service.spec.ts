import { TestBed } from '@angular/core/testing';

import { FichedepaieService } from './fichedepaie.service';

describe('FichedepaieService', () => {
  let service: FichedepaieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FichedepaieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
