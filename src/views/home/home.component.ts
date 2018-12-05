import { Component } from '@angular/core';

import { InfoDataServiceService } from 'src/services/info-data-service.service';
import { IInfoData, IInfoElement } from 'src/services/info-data.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public data: IInfoElement[];
  public dataFilter: IInfoElement[];
  public showLoader = true;
  public showError: boolean;

  constructor(private userDataServie: InfoDataServiceService) {
    this.getData();
  }

  private getData() {
    this.userDataServie.getData().subscribe(
      (res: IInfoData) => this.data = res.Brastlewark,
      (err) => this.showError = true
      ).add(() => setTimeout(() => {
          this.showLoader = false; // added timeout because the data is received very quickly
      }, 2500));
  }

  public onSearchValueChange(value: string | null) {
    if (value) {
      this.dataFilter = this.data.filter((dataElement) => dataElement.name.toLowerCase().includes(value.toLowerCase()));
    } else {
      this.dataFilter = null;
    }
  }
}
