import { Component } from '@angular/core';


import { IInfoData, IInfoElement } from 'src/services/info-data.interface';
import { InfoDataService } from 'src/services/info-data-service.service';

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

  constructor(public userDataServie: InfoDataService) {
    this.getData();
  }

  public getData() {
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
