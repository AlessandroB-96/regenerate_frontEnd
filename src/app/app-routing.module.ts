import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';

//Here i'm defining Routes array; this way, every time i add a component (Path+component) it will be add automatically to app.module.ts -> @NgModule, declaration
const routes: Routes = [
  {
    path: 'reservation',
    component: ReservationComponent,
  }
  ,
  {
    path: 'home',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ReservationComponent]
