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

  public departments: Department[] = [];
  public doctors: Doctor[] = [];

  constructor(private departmentService: DepartmentService, private doctorService: DoctorService) { }

  ngOnInit(){
    this.getDepartment();
    this.getDoctor();
  }
  
  public getDoctor(): void {
    this.doctorService.getDoctor().subscribe(
      (response: Doctor[])=> {this.doctors = response},
      (error: HttpErrorResponse) => {alert(error.message)}
    )
  }

  public getDepartment() : void {
    this.departmentService.getDepartment().subscribe(
      (response: Department[])=> {this.departments = response},
      (error: HttpErrorResponse) => {alert(error.message)}
    )
  }

  public departmentClicked(depName: string){
    document.getElementById('department')!.innerHTML = depName;
  }

  ngAfterViewInit(){
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
