import { DoctorService } from './../doctor.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  /**** VARIABLE ****/

  public departments: Department[] = [];
  public doctors: Doctor[] = [];
  public idDepartment: number | undefined;
  public doctorsByIdDepa: Doctor[] = [];

  constructor(private departmentService: DepartmentService, private doctorService: DoctorService) { }

  ngOnInit() {
    this.getDepartment();
    this.getDoctor();
  }

  /**** OBSERVER ****/
  public getDoctor(): void {
    this.doctorService.getDoctor().subscribe(
      (response: Doctor[]) => { this.doctors = response },
      (error: HttpErrorResponse) => { alert(error.message) }
    )
  }

  public getDepartment(): void {
    this.departmentService.getDepartment().subscribe(
      (response: Department[]) => { this.departments = response },
      (error: HttpErrorResponse) => { alert(error.message) }
    )
  }

  public getIdDepartmentByDepartmentName(name: string) {
    this.departmentService.getIdDepartmentByDepartmentName(name).subscribe(
      (response: number) => { this.idDepartment = response },
      (error: HttpErrorResponse) => { alert(error.message) }
    )
  }

  public getDoctorsByIdDepartment(id: number) {
    this.doctorService.getDoctorsByIdDepartment(id).subscribe(
      (response: Doctor[]) => { this.doctors = response },
      (error: HttpErrorResponse) => { alert(error.message) }
    )
  }

  /**** METHODS ****/

  public departmentClicked(name: string) {
    this.getIdDepartmentByDepartmentName(name);
    setTimeout(() => {
      this.getDoctorsByIdDepartment(this.idDepartment!);
    }, 500);
  }


  /**** DISPLAY ****/

  ngAfterViewInit() {
    document.body.classList.add('doctors');
    document.getElementById('doctors-link')?.classList.add('selected');
    document.getElementById('doctors-link')?.classList.remove('animation');
  }

  ngOnDestroy() {
    document.body.classList.remove('doctors');
    document.getElementById('doctors-link')?.classList.remove('selected');
    document.getElementById('doctors-link')?.classList.add('animation');
  }

}
