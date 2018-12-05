import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { InfoDataServiceService } from './info-data-service.service';

describe('InfoDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: InfoDataServiceService = TestBed.get(InfoDataServiceService);
    expect(service).toBeTruthy();
  });
});
