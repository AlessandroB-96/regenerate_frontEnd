import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Regenerate';

  ngAfterViewInit(){
    document.body.classList.add('home');
  }

  ngOnDestroy() {
    document.body.classList.remove('home');
  }

}

