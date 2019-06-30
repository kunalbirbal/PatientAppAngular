import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSnackBar } from '@angular/material';
import { PatientService } from '../services/patient.service';
import { AppUtility } from '../app.utility';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-medical-detail',
  templateUrl: './patient-medical-detail.component.html',
  styleUrls: ['./patient-medical-detail.component.css'],
  providers: [PatientService]
})
export class PatientMedicalDetailComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  result: any;
  
  constructor(private patientService: PatientService, public snackbar: MatSnackBar, private utility: AppUtility, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.getPatientMedicalHistoryDetail(id);
  }

  getPatientMedicalHistoryDetail(id){
      this.patientService.getPatientMedicalHistoryDetails(id).subscribe(responseData => {
        let data:any = responseData;
        console.log(responseData);
        if (data.response != null) {
          this.result = data.response;
        }

      });
  }

  close(reason: string) {
    this.sidenav.close();
  }
}
