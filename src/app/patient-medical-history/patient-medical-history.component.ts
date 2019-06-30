import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatPaginator, MatSort, MatSnackBar, MatDialog, MatTableDataSource } from '@angular/material';
import { PatientService } from '../services/patient.service';
import { AppUtility } from '../app.utility';

@Component({
  selector: 'app-patient-medical-history',
  templateUrl: './patient-medical-history.component.html',
  styleUrls: ['./patient-medical-history.component.css'],
  providers: [PatientService]
})
export class PatientMedicalHistoryComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  displayedColumns: string[] = ['date', 'symptoms', 'disease', 'action'];
  dataSource: any;
  patientResults: any;
  pat_id:number = 1;

  constructor(private patientService: PatientService, public snackbar: MatSnackBar, private utility: AppUtility, public dialog: MatDialog) { }

  ngOnInit() {
    this.patientService.getPatientMedicalHistory(this.pat_id)
      .subscribe((data: any) => {
        console.log(data.response)
        this.patientResults = data.response;
        this.dataSource = new MatTableDataSource(this.patientResults);
        this.dataSource.paginator = this.paginator;
      }, error => {
        console.log(error);
    });
  }

  // table filter
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  close(reason: string) {
    this.sidenav.close();
  }
}
