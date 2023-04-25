export interface CustomerInfo {
    id: string;
    name: string;
    email: string;
    status: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface TaskInfo {
    id: string;
    task: string;
    sub_task: string;
    status: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface EmployeeInfo {
    id: string;
    name: string;
    email: string;
    status: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface UserInfo {
    id: string;
    name: string;
    password: string;
    email: string;
    role: string;
    privilege: string;
    status: string;
    createdAt?: Date;
    updatedAt?: Date;
}