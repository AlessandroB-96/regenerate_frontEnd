import { Department } from "./department";

export interface Visit{
    idVisit: number;
    name: string;
    duration: number;
    idDepartment : Department
}