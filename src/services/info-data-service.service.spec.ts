import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { InfoDataService } from './info-data-service.service';
import { Observable } from 'rxjs';

describe('InfoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: InfoDataService = TestBed.get(InfoDataService);
    expect(service).toBeTruthy();
  });

    it('should return data when the data is cached', () => {
    const service: InfoDataService = TestBed.get(InfoDataService);
    service.data = new Observable();

    expect(service.getData()).toEqual(service.data);
  });
});
