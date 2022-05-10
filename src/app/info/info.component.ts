import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    document.body.classList.add('info');
    document.getElementById('info-link')?.classList.add('selected');
    document.getElementById('info-link')?.classList.remove('animation');
  }

  ngOnDestroy() {
    document.body.classList.remove('info');
    document.getElementById('info-link')?.classList.remove('selected');
    document.getElementById('info-link')?.classList.add('animation');
  }

}
