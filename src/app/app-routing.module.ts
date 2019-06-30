import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PatientMedicalHistoryComponent } from './patient-medical-history/patient-medical-history.component';
import { PatientMedicalDetailComponent } from './patient-medical-detail/patient-medical-detail.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'my-profile', component: MyProfileComponent },
    { path: 'edit-profile/:id', component: EditProfileComponent },
    { path: 'medical-history', component: PatientMedicalHistoryComponent },
    { path: 'medical-detail/:id', component: PatientMedicalDetailComponent },
    { path: 'book-appointments', component: BookAppointmentComponent },
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
