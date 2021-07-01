import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicantComponent } from './Applicant/applicant/applicant.component';
import { EditApplicantComponent } from './Applicant/edit-applicant/edit-applicant.component';
import { ListApplicantComponent } from './Applicant/list-applicant/list-applicant.component';
import { AddApplicationComponent } from './Application/add-application/add-application.component';
import { ApplicationComponent } from './Application/application/application.component';
import { EditApplicationComponent } from './Application/edit-application/edit-application.component';
import { ListApplicationComponent } from './Application/list-application/list-application.component';
import { AddAppointmentComponent } from './Appointment/add-appointment/add-appointment.component';
import { AppointmentComponent } from './Appointment/appointment/appointment.component';
import { EditAppointmentComponent } from './Appointment/edit-appointment/edit-appointment.component';
import { ListAppointmentComponent } from './Appointment/list-appointment/list-appointment.component';
import { AddDrivingLicenseComponent } from './DrivingLicense/add-driving-license/add-driving-license.component';
import { DrivingLicenseComponent } from './DrivingLicense/driving-license/driving-license.component';
import { ListDrivingLicenseComponent } from './DrivingLicense/list-driving-license/list-driving-license.component';
import { RtoOfficerComponent } from './RtoOfficer/rto-officer.component';
import { LoginComponent } from './User/logIn/login.component';
import { LogOutComponent } from './User/logOut/logOut.component';
import { RegisterComponent } from './User/register/register.component';
import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './Footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LogOutComponent,
    RegisterComponent,
    RtoOfficerComponent,
    ListApplicantComponent,
    EditApplicantComponent,
    ApplicantComponent,
    AddApplicationComponent,
    ApplicationComponent,
    EditApplicationComponent,
    ListApplicationComponent,
    AddAppointmentComponent,
    AppointmentComponent,
    EditAppointmentComponent,
    ListAppointmentComponent,
    AddDrivingLicenseComponent,
    DrivingLicenseComponent,
    ListDrivingLicenseComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
