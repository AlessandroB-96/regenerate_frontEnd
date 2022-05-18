import { Department } from "./department";

export interface Doctor {
    idDoc: number;
    name: string;
    surname: string;
    phone: number;
    amOrPm: boolean;
    idDepartment: Department;
    imageUrl: string;
}