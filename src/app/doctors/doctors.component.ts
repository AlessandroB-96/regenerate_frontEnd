import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
