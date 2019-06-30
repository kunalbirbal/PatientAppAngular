import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiResponse } from "../models/ApiResponse";
import { map, filter, catchError, mergeMap } from "rxjs/operators";

@Injectable()
export class PatientService{
    private httpOptions: any = null;
    //private apiBaseUrl: string = "http://localhost:8090";
    private apiBaseUrl: string = "http://ec2-13-233-122-194.ap-south-1.compute.amazonaws.com:8080/harbor";

    constructor(private http: HttpClient){
        let headers: any = { 'Authorization': 'Token eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtcmNvb2wiLCJ1c2VySWQiOiI5Iiwicm9sZSI6ImFkbWluIn0.YvfUxAwoHSibYxDHZ5ZLyLok5LQ1TvapRqfTQpHZObwK5By3hi_U3Hrqoh371-LOb1MbXgq0hDJwJnABlE93mw' };
        this.httpOptions = { headers: new HttpHeaders(headers) };
    }

    // getPatientByMobile(mobile: string) {
    //     return this.http.get<ApiResponse>(this.apiBaseUrl + "/api/patient/mobile/" + mobile, this.httpOptions)
    // }

    // createHospitalPatient(req: any) {
    //     console.log(req);
    //     return this.http.post<ApiResponse>(this.apiBaseUrl + "/api/hospital-patient/create", req, this.httpOptions)
    // }

    // getDepartmentsByDoctor(doctor: number) {
    //     return this.http.get<ApiResponse>(this.apiBaseUrl + "/api/doctor/" + doctor + "/departments", this.httpOptions)
    // }

    getPatientProfile(patient: number) {
        return this.http.get<ApiResponse>(this.apiBaseUrl + "/api/getpatient/" + patient, this.httpOptions)
    }

    editPatientProfile(req: any){
        console.log(req);
        return this.http.post<ApiResponse>(this.apiBaseUrl + "/api/patient/edit", req, this.httpOptions)
    }

    // searchAppointment(req: any) {
    //     return this.http.post<ApiResponse>(this.apiBaseUrl + "/api/appointment/search", req, this.httpOptions)
    // }
    
    // updateAppointment(req: any) {
    //     return this.http.post<ApiResponse>(this.apiBaseUrl + "/api/appointment/detail/update", req, this.httpOptions)
    // }

    // getAppointmentById(appointmentId: number) {
    //     return this.http.get<ApiResponse>(this.apiBaseUrl + "/api/appointment/" + appointmentId, this.httpOptions)
    // }

    // getDoctorPatients(doctor: number) {
    //     return this.http.get<ApiResponse>(this.apiBaseUrl + "/api/doctor-patient/" + doctor, this.httpOptions)
    // }

    getPatientMedicalHistory(patient_id: number) {
        return this.http.get<ApiResponse>(this.apiBaseUrl + "/api/doctor-patient/patient/" + patient_id, this.httpOptions)
    }

    getPatientMedicalHistoryDetails(app_id: number) {
        return this.http.get<ApiResponse>(this.apiBaseUrl + "/api/doctor-patient/patient/appointment/" + app_id, this.httpOptions)
    }
}
