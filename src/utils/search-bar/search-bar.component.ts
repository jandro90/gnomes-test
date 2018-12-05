import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() private searchValueChanges: EventEmitter<string> = new EventEmitter();
  public searcInput = new FormControl();

  constructor() {
    this.subscribeSearchValue();
  }

  subscribeSearchValue() {
    this.searcInput.valueChanges.subscribe((value) => {
      value !== ''
      ? this.searchValueChanges.emit(value)
      : this.searchValueChanges.emit(null);
    });
  }

}
