import { Component, Input, OnInit } from '@angular/core';

import { IInfoElement } from 'src/services/info-data.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public cardData: IInfoElement;
  public data;

  ngOnInit() {
    this.data = this.cardData;
  }
}
