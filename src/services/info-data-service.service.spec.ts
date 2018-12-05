import { TestBed } from '@angular/core/testing';

import { InfoDataServiceService } from './info-data-service.service';

describe('InfoDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoDataServiceService = TestBed.get(InfoDataServiceService);
    expect(service).toBeTruthy();
  });
});
