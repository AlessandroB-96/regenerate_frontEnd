import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../department';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  public data: Date = new Date();
  public months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

  public departments: Department[] = [];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.getDepartment();
  }

  public getDepartment() : void{
    this.departmentService.getDepartment().subscribe(
      (response: Department[])=> {this.departments = response},
      (error: HttpErrorResponse) => {alert(error.message)}
    )
  }

  renderCalendar() {
    // days (month - day -year) 
    document.querySelector(".calendar .month-name")!.innerHTML = this.months[this.data.getMonth()];
    document.querySelector(".calendar .year")!.innerHTML = this.data.getFullYear().toString();
    document.querySelector(".calendar .day")!.innerHTML = this.data.getDate().toString();

    if (this.data.getDay() == 6 || this.data.getDay() == 0) {
      for (var i = 1; i < 8; i += 1) {
        var string: string = 'morningHour' + i;
        document.getElementById(string)?.classList.add('closeDay');
        document.getElementById('morningHours')?.classList.add('disabledHours');
        var string: string = 'afternoonHour' + i;
        document.getElementById(string)?.classList.add('closeDay');
        document.getElementById('afternoonHours')?.classList.add('disabledHours');
      }
    }
    else {
      for (var i = 1; i < 8; i += 1) {
        var string: string = 'morningHour' + i;
        document.getElementById(string)?.classList.remove('closeDay');
        document.getElementById('morningHours')?.classList.remove('disabledHours');
        var string: string = 'afternoonHour' + i;
        document.getElementById(string)?.classList.remove('closeDay');
        document.getElementById('afternoonHours')?.classList.remove('disabledHours');
      }
    }

  }


  ngAfterViewInit() {
    document.body.classList.add('reservation');
    document.getElementById('reservation-link')?.classList.add('selected');
    document.getElementById('reservation-link')?.classList.remove('animation');

    this.renderCalendar();


    document.querySelector('.prev')?.addEventListener('click', () => {
      this.data.setDate(this.data.getDate() - 1);
      this.renderCalendar();

    });

    document.querySelector('.next')?.addEventListener('click', () => {
      this.data.setDate(this.data.getDate() + 1);
      this.renderCalendar();

    });

  }

  ngOnDestroy() {
    document.body.classList.remove('reservation');
    document.getElementById('reservation-link')?.classList.remove('selected');
    document.getElementById('reservation-link')?.classList.add('animation');
  }

  //Method that highligts hours clicked by the user in reservation component
  public onClickHours(divId: string) {

    if (!(document.getElementById('morningHours')?.classList.contains('alreadySelected')) && !(document.getElementById('morningHours')?.classList.contains('disabledHours'))) {

      if (!(document.getElementById(divId)?.classList.contains('selectedHour'))) {
        document.getElementById(divId)?.classList.add('selectedHour');
        document.getElementById('morningHours')?.classList.add('alreadySelected');
      }

    }

    else if ((document.getElementById('morningHours')?.classList.contains('alreadySelected')) && (document.getElementById(divId)?.classList.contains('selectedHour'))) {

      document.getElementById('morningHours')?.classList.remove('alreadySelected');
      document.getElementById(divId)?.classList.remove('selectedHour');

    }
  }

  //Method that change the name of department in html file
  public departmentClicked(depName: string){
    document.getElementById('department')!.innerHTML = depName;
  }

  //Method that keep tracks of changes in department name
  public departmentChanged (depName: string){
    //TODO
  }

}