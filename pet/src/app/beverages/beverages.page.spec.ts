import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragesPage } from './beverages.page';

describe('BeveragesPage', () => {
  let component: BeveragesPage;
  let fixture: ComponentFixture<BeveragesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeveragesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeveragesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
