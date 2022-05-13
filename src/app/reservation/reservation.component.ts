import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  public data: Date = new Date();
  public months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

  constructor() { }

  renderCalendar() {
    // month and year
    document.querySelector(".calendar .month-name")!.innerHTML = this.months[this.data.getMonth()];
    document.querySelector(".calendar .year")!.innerHTML = this.data.getFullYear().toString();

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(this.data.getFullYear(), this.data.getMonth() + 1, 0).getDate();
    //const prevLastDay = new Date(this.data.getFullYear(), this.data.getMonth(), 0).getDate();

    //const firstDayIndex = this.data.getDate();
    //const lastDayIndex = new Date(this.data.getFullYear(), this.data.getMonth() + 1, 0).getDay();

    //const nextDays = 7 - lastDayIndex;
    let days = "";


    /*for (let j = firstDayIndex; j < 0; j++) {
      days += `<div class="previous-day">${prevLastDay - j + 1}</div>`;
    }*/

    // to set days
    for (let i = 1; i <= lastDay; i++) {
      if (i === new Date().getDate() && this.data.getMonth() === new Date().getMonth()) {
        days += `<div class="today">${i}</div>`;
      }
      else {
        days += `<div>${i}</div>`;
      }
    }

    /*for (let j = 1; j <= nextDays; j++) {
      days += `<div class="next-day">${j}</div>`;
    }*/

    monthDays!.innerHTML = days;

  }

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    document.body.classList.add('reservation');
    document.getElementById('reservation-link')?.classList.add('selected');
    document.getElementById('reservation-link')?.classList.remove('animation');

    this.renderCalendar();

    document.querySelector('.prev')?.addEventListener('click', () => {
      this.data.setMonth(this.data.getMonth() - 1);
      this.renderCalendar();

    });

    document.querySelector('.next')?.addEventListener('click', () => {
      this.data.setMonth(this.data.getMonth() + 1);
      this.renderCalendar();

    });

  }

  ngOnDestroy() {
    document.body.classList.remove('reservation');
    document.getElementById('reservation-link')?.classList.remove('selected');
    document.getElementById('reservation-link')?.classList.add('animation');
  }
}