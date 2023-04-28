export interface ICustomer {
    id: string;
    name: string;
    email: string;
    status: string;
    password: string;
    hourly_rate: number;
    role?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface ITask {
    id?: string;
    task: string;
    sub_task: string;
    status?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface IEmployee {
    id: string;
    name: string;
    email: string;
    status: string;
    role: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface IUser {
    id?: string;
    name: string;
    password: string;
    email: string;
    value: string;
    privilege: string;
    status: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IReport {
    id?: string;
    customer: string;
    task: string;
    task_detail: string;
    no_hours: string;
    employee: string;
    travel?: number;
    expense?: number;
}

export interface IRole {
    value: string;
    fee: number;
    id?: number;
}
export const PRIVILEGE = {
    ADMIN: 'ADMIN',
    EMPLOYEE: 'EMPLOYEE'
}
export const REPORT_STRATEGY = {
    CUSTOMER: 'CUSTOMER',
    EMPLOYEE: 'EMPLOYEE'
}
export const employeeArrState0: IEmployee[] = [{
    id: '',
    name: '',
    email: '',
    status: '',
    role: ''
}]
export const STATUS = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE'
}