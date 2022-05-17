import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Regenerate';

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    document.body.classList.add('home');
  }

  ngOnDestroy() {
    document.body.classList.remove('home');
  }

}

