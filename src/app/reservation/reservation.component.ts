import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../department';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Visit } from '../visit';
import { VisitService } from '../visit.service';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  public data: Date = new Date();
  public months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

  public departments: Department[] = [];
  public visits: Visit[] = [];
  public visit: Visit | undefined;
  public doctors: Doctor[] = [];
  public doctor: Doctor | undefined;
  public doctorsByIdDepartment: Doctor[] = [];
  //Department variables
  public nameDepartment: string | undefined;
  public idDepartment: number | undefined;
  //Visit variables
  public visitsByIdDepartment: Visit[] = [];
  //Reservation variables
  public reservations: Reservation[] = [];
  public newReservation: Reservation | undefined;

  constructor(private departmentService: DepartmentService, private visitService: VisitService, private doctorService: DoctorService,
    private reservationService: ReservationService, private http: HttpClient) { }

  ngOnInit() {
    this.getDepartment();
  }

  /* Observer */
  //Promise in JS

  public getDepartment(): void {
    this.departmentService.getDepartment().subscribe(
      (response: Department[]) => { this.departments = response },
      (error: HttpErrorResponse) => { alert(error.message) }
    )
  }

  public getVisit(): void {
    this.visitService.getVisit().subscribe(
      (response: Visit[]) => { this.visits = response },
      (error: HttpErrorResponse) => { alert(error.message) }
    )
  }

  public getVisitsbyIdDepartment(idDepartment: number) {
    this.visitService.getVisitbyIdDepartment(idDepartment).subscribe(
      (response: Visit[]) => { this.visitsByIdDepartment = response },
      (error: HttpErrorResponse) => { alert(error.message) }
    )
  }

  public getDoctor(): void {
    this.doctorService.getDoctor().subscribe(
      (response: Doctor[]) => { this.doctors = response },
      (error: HttpErrorResponse) => { alert(error.message) }
    )
  }

  public getDoctorsByIdDepartment(idDepartment: number) {
    this.doctorService.getDoctorsByIdDepartment(idDepartment).subscribe(
      (response: Doctor[]) => { this.doctorsByIdDepartment = response },
      (error: HttpErrorResponse) => { alert(error.message) }
    )
  }

  public getIdDepartmentByDepartmentName(departmentName: string) {
    this.departmentService.getIdDepartmentByDepartmentName(departmentName).subscribe(
      (response: number) => { this.idDepartment = response },
      (error: HttpErrorResponse) => { alert(error.message) }
    )
  }

  public getVisitByName(name: string | undefined) {
    this.visitService.getVisitByName(name).subscribe(
      (response: Visit) => { this.visit = response },
      (error: HttpErrorResponse) => { alert(error.message) }
    )
  }

  public getDoctorByName(name: string | undefined) {
    this.doctorService.getDoctorByName(name).subscribe(
      (response: Doctor) => { this.doctor = response },
      (error: HttpErrorResponse) => { alert(error.message) }
    )
  }

  /* Other methods */

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

  //Method that highligts hours clicked by the user in reservation component;integrated with side list selector
  public onClickHours(divId: string) {

    if (!(document.getElementById('morningHours')?.classList.contains('alreadySelected')) && !(document.getElementById('morningHours')?.classList.contains('disabledHours'))) {

      if (!(document.getElementById(divId)?.classList.contains('selectedHour'))) {
        document.getElementById(divId)?.classList.add('selectedHour');
        document.getElementById('morningHours')?.classList.add('alreadySelected');
      }
      if ((document.getElementById('department')?.classList.contains('selected')) && (document.getElementById('visit')?.classList.contains('selected')) && (document.getElementById('doctor')?.classList.contains('selected')) && (document.getElementById('morningHours')?.classList.contains('alreadySelected'))) {
        document.getElementById('submitButton')?.classList.remove('disabled');
      }

    }

    else if ((document.getElementById('morningHours')?.classList.contains('alreadySelected')) && (document.getElementById(divId)?.classList.contains('selectedHour'))) {

      document.getElementById('morningHours')?.classList.remove('alreadySelected');
      document.getElementById(divId)?.classList.remove('selectedHour');
      document.getElementById('submitButton')?.classList.add('disabled');
    }
  }

  //Method that change the name of department in html file
  public departmentClicked(depName: string) {
    document.getElementById('department')!.innerHTML = depName;
  }
  //Method that change the name of department in html file
  public visitClicked(visName: string) {
    document.getElementById('visit')!.innerHTML = visName;
  }
  //Method that change the name of department in html file
  public doctorClicked(docName: string) {
    document.getElementById('doctor')!.innerHTML = docName;
  }

  //Method that checks if the three main div of the side list are selected or not and then enables submitButton;integrated with hour selector
  public isSelected(div: string): void {
    switch (div) {
      case 'department':
        document.getElementById('department')?.classList.add('selected');
        break;
      case 'visit':
        document.getElementById('visit')?.classList.add('selected');
        break;
      case 'doctor':
        document.getElementById('doctor')?.classList.add('selected');
        break;
    }
    if ((document.getElementById('department')?.classList.contains('selected')) && (document.getElementById('visit')?.classList.contains('selected')) && (document.getElementById('doctor')?.classList.contains('selected')) && (document.getElementById('morningHours')?.classList.contains('alreadySelected'))) {
      document.getElementById('submitButton')?.classList.remove('disabled');
    }

  }

  /**
   * It gets the idDepartment by the departmentName, then it removes the disabled class from the doctor
   * and visit dropdowns, then it gets the doctors by the idDepartment and gets the visits by the
   * idDepartment.
   * @param {string} departmentName - string - the name of the department that the user selected from the
   * dropdown list
   */
  public setIdDepartmentNumber(departmentName: string) {
    this.getIdDepartmentByDepartmentName(departmentName);
    setTimeout(() => {
      document.getElementById('doctor')?.classList.remove('disabled');
      this.getDoctorsByIdDepartment(this.idDepartment!);
      document.getElementById('visit')?.classList.remove('disabled');
      this.getVisitsbyIdDepartment(this.idDepartment!);
    }, 500);
  }

  /**
   * It takes the values of the selected visit, doctor, hour and idHour and puts them into an object
   * called data.
   * TODO = Needs to pass this object to back-end to create a new reservation
   */
  // public submitReservation() {
  //   var visit = document.getElementById("visit")?.innerHTML;
  //   var doctor = document.getElementById("doctor")?.innerHTML;
  //   var idHour = document.getElementsByClassName('selectedHour')[0].id;
  //   var hour = document.getElementById(idHour)?.innerHTML;

  //   var data = {
  //     "id_visit": 1,
  //     "id_doctor": 1,
  //     "id_customer": 1,
  //   }
  //   console.log(data);

  //   fetch((environment.apiBaseUrl+"/reservation/add"), {
  //     method: 'PUT',
  //     body: JSON.stringify(data)
  //   }).then(function (response) {
  //     return response.json();
  //   }).then(function (data) {
  //     console.log("Data returned from server", data)
  //   });
  // }

  public submitReservation() {

    //Theese variables are needed to fetch values of needed attributes inside the DOM
    var visitName = document.getElementById("visit")?.innerHTML;
    console.log(visitName);
    this.getVisitByName(visitName);
    console.log(this.getVisitByName(visitName));

    var doctorName = document.getElementById("doctor")?.innerHTML;
    this.getDoctorByName(doctorName);

    setTimeout(() => {

      var visitId: number = this.visit!.idVisit;
      console.log(visitId);
      var doctorId: number = this.doctor!.idDoc;
      console.log(doctorId);


      var idHour = document.getElementsByClassName('selectedHour')[0].id;
      var hour = document.getElementById(idHour)?.innerHTML;

      //Need to define attributes like this, otherwise won't read their properties
      this.newReservation = {
        cF: 1,
        idVisit: { idVisit: visitId },
        idDoctor: { idDoc: doctorId },
      }
      console.log(this.newReservation);

      this.reservationService.addReservation(this.newReservation).subscribe(reservation => this.reservations.push(reservation));
      this.showToast();

    }, 500);

  }

  public showToast() {
    var toastLiveExample = document.getElementById('liveToast');
    var toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
      
  }

}