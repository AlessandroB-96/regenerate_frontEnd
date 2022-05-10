import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    document.body.classList.add('contacts');
    document.getElementById('contacts-link')?.classList.add('selected');
    document.getElementById('contacts-link')?.classList.remove('animation');
  }

  ngOnDestroy() {
    document.body.classList.remove('contacts');
    document.getElementById('contacts-link')?.classList.remove('selected');
    document.getElementById('contacts-link')?.classList.add('animation');
  }

}
