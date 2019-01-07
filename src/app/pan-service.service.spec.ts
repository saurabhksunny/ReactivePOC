import { TestBed, inject } from '@angular/core/testing';

import { PanServiceService } from './pan-service.service';

describe('PanServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PanServiceService]
    });
  });

  it('should be created', inject([PanServiceService], (service: PanServiceService) => {
    expect(service).toBeTruthy();
  }));
});
