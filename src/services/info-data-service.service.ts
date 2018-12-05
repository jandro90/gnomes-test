import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IInfoData } from './info-data.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoDataServiceService {
  private dataURL = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
  private data: Observable<any>;

  constructor(private http: HttpClient) {}

  public getData(): Observable<IInfoData> {
    if (!this.data) {
     this.data = this.http.get(this.dataURL);
    }

    return this.data;
  }
}
