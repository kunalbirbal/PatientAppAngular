import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSnackBar } from '@angular/material';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
  providers: [PatientService]
})
export class MyProfileComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;
  
  patient_id: number = 1;
  patientProfile: any;

  constructor(private patientService: PatientService, public snackbar: MatSnackBar) { }

  ngOnInit() {
    this.getProfile(this.patient_id);
  }

  getProfile(patient_id){
    this.patientService.getPatientProfile(patient_id).subscribe(responseData => {
      let data:any = responseData;
      console.log(responseData);
      if (data.response != null) {
        this.patientProfile = data.response;
      }

    });
  }

}
