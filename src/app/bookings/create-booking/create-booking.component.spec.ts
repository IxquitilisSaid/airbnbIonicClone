import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookingPage } from './create-booking.page';

describe('CreateBookingPage', () => {
  let component: CreateBookingPage;
  let fixture: ComponentFixture<CreateBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBookingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
