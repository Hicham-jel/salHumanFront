import { TestBed } from '@angular/core/testing';

import { ElementdesalaireService } from './elementdesalaire.service';

describe('ElementdesalaireService', () => {
  let service: ElementdesalaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementdesalaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
