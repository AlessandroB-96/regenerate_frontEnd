import { Data } from "@angular/router";
import { Doctor } from "./doctor";
import { Visit } from "./visit";

export interface Reservation{
    idReservation?: number;
    date?: Data;
    hour?: Data;
    idDoctor?: Doctor;
    idVisit: Visit;
    idCustomer?: number;
    cF?: number;
}