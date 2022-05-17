import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  public departments: Department[] = [];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(){
    this.getDepartment();
  }


  public getDepartment() : void{
    this.departmentService.getDepartment().subscribe(
      (response: Department[])=> {this.departments = response},
      (error: HttpErrorResponse) => {alert(error.message)}
    )
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

  public departmentClicked(depName: string){
    document.getElementById('department')!.innerHTML = depName;
  }
  
}
