import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const stubCardData = {
      age: 22,
      friends: ['stub'],
      hair_color: 'stubColor',
      height: 7,
      id: 23,
      name: 'stubName',
      professions: ['stubProfessions'],
      length: 0,
      thumbnail: 'stubImage',
      weight: 8,
    };

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.cardData = stubCardData;
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
