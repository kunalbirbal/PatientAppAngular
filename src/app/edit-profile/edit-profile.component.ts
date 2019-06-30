import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSidenav, MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers: [PatientService]
})
export class EditProfileComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  patientForm: FormGroup;  
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  pat_id;
  patientProfile: any;
  
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,private patientService: PatientService, public snackbar: MatSnackBar, private cd: ChangeDetectorRef) {
    this.patientForm = this.formBuilder.group({
      'contact' : ['', Validators.compose([Validators.required, Validators.pattern(this.mobnumPattern)])],
      'name': ['', Validators.required],
      'aadhar_no': [''],
      'address': [''],
      'city': [''],
      'email': ['', Validators.email],
      'age': [''],
      'gender': [''],
      'photo': [''],
      'pincode': [''],
      'state': [''],
    })
  }

  onFileChange(event) {
    const reader = new FileReader();
 
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
  
      reader.onload = () => {
        this.patientForm.patchValue({
          file: reader.result
       });
      
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

  ngOnInit() {
      const id = +this.route.snapshot.paramMap.get('id');
      console.log(id);
      this.getPaient(id);
      this.pat_id = id;
  }

  getPaient(patient_id){
      this.patientService.getPatientProfile(patient_id).subscribe(responseData => {
      let data:any = responseData;
      console.log(responseData);
      if (data.response != null) {
        this.patientProfile = data.response;
        this.patientForm.controls["name"].setValue(data.response.name);
        this.patientForm.controls["contact"].setValue(data.response.contact);
        this.patientForm.controls["aadhar_no"].setValue(data.response.aadhar_no);
        this.patientForm.controls["address"].setValue(data.response.address);
        this.patientForm.controls["city"].setValue(data.response.city);
        this.patientForm.controls["email"].setValue(data.response.email);
        this.patientForm.controls["age"].setValue(data.response.age);
        this.patientForm.controls["gender"].setValue(data.response.gender);
        this.patientForm.controls["photo"].setValue(data.response.photo);
        this.patientForm.controls["pincode"].setValue(data.response.pincode);
        this.patientForm.controls["state"].setValue(data.response.state);
      }

    });
  }

  onSubmit() {

    let req: any = {
      "id": this.pat_id,
      "name": this.patientForm.controls["name"].value,
      "contact": this.patientForm.controls["contact"].value,
      "aadhar_no": this.patientForm.controls["aadhar_no"].value,
      "address": this.patientForm.controls["address"].value,
      "city": this.patientForm.controls["city"].value,
      "email": this.patientForm.controls["email"].value,
      "age": this.patientForm.controls["age"].value,
      "gender": this.patientForm.controls["gender"].value,
      "photo": this.patientForm.controls["photo"].value,
      "pincode": this.patientForm.controls["pincode"].value,
      "state": this.patientForm.controls["state"].value,
    }


    this.patientService.editPatientProfile(req)
      .subscribe((data: any) => {
        console.log(JSON.stringify(data));
        console.log("Profile Updated Successfully");
        this.snackbar.open("Profile Updated Successfully", "", {
          duration: 4000,
        });
      }, error => {
        console.log("Profile Updation Failed");
        this.snackbar.open("Profile Updation Failed", "", {
          duration: 4000,
        });
        console.log(error);
      });
  }


}
