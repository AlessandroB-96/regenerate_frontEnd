import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    document.body.classList.add('reservation');
    document.getElementById('reservation-link')?.classList.add('selected');
    document.getElementById('reservation-link')?.classList.remove('animation');
  }

  ngOnDestroy() {
    document.body.classList.remove('reservation');
    document.getElementById('reservation-link')?.classList.remove('selected');
    document.getElementById('reservation-link')?.classList.add('animation');
  }
}
