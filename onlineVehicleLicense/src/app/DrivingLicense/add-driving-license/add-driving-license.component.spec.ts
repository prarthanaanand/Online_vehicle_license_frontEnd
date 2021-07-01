import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDrivingLicenseComponent } from './add-driving-license.component';

describe('AddDrivingLicenseComponent', () => {
  let component: AddDrivingLicenseComponent;
  let fixture: ComponentFixture<AddDrivingLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDrivingLicenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDrivingLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
