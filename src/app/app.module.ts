import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { InfoComponent } from './info/info.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DepartmentService } from './department.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    DoctorsComponent,
    InfoComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
