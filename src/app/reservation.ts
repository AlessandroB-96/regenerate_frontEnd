import { Data } from "@angular/router";
import { Customer } from "./customer";
import { Doctor } from "./doctor";
import { Visit } from "./visit";

export interface Reservation{
    idReservation?: number;
    date?: Data;
    hour?: string;
    idDoctor?: Doctor;
    idVisit: Visit;
    idCustomer?: Customer;
}