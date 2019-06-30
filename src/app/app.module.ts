import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// material imports
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatNativeDateModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppSidenavComponent } from './app-sidenav/app-sidenav.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AppUtility } from './app.utility';
import { DatePipe } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PatientMedicalHistoryComponent } from './patient-medical-history/patient-medical-history.component';
import { PatientMedicalDetailComponent } from './patient-medical-detail/patient-medical-detail.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppSidenavComponent,
    MyProfileComponent,
    EditProfileComponent,
    PatientMedicalHistoryComponent,
    PatientMedicalDetailComponent,
    BookAppointmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatNativeDateModule,
    MatDatepickerModule,

  ],
  providers: [MatDatepickerModule, AppUtility, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
