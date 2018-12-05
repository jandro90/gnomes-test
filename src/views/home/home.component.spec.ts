import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomeComponent } from './home.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClient, HttpHandler } from '@angular/common/http';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ScrollingModule, HttpClientTestingModule ],
      declarations: [ HomeComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        HttpClient,
        HttpHandler,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should asign data filter whean search value is changed (NO Case Sensitive)', () => {
    component.data = [{
      age: 7,
      friends: ['stubValue'],
      hair_color: 'stubValue',
      height: 7,
      id: 7,
      name: 'stubValue',
      professions: ['stubValue'],
      length: 7,
      thumbnail: 'stubValue',
      weight: 7,
  }];
  component.onSearchValueChange('stubValue');
  expect(component.dataFilter).toEqual(component.data);
});

it('should data filter is null when search value is empty', () => {
  component.data = [{
    age: 7,
    friends: ['stubValue'],
    hair_color: 'stubValue',
    height: 7,
    id: 7,
    name: 'stubValue',
    professions: ['stubValue'],
    length: 7,
    thumbnail: 'stubValue',
    weight: 7,
  }];
  component.onSearchValueChange(null);
  expect(component.dataFilter).toBeFalsy();
});

});
