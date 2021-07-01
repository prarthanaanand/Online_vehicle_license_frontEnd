import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDrivingLicenseComponent } from './list-driving-license.component';

describe('ListDrivingLicenseComponent', () => {
  let component: ListDrivingLicenseComponent;
  let fixture: ComponentFixture<ListDrivingLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDrivingLicenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDrivingLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
