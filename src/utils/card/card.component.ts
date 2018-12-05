import { Component, Input } from '@angular/core';
import { IInfoElement } from 'src/services/info-data.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public cardData: IInfoElement;

  constructor() {}

}
