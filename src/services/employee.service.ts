import { http } from "../utils/https/http-common";

export default class EmployeeService {
    getEmployee() {
        return http.get('/admin/employee/list-all');
    }
    resetEmployeePassword(id: string) {
        return http.get(`/admin/employee/${id}/reset-password`)
    }
    changeEmployeeStatus(id: string) {
        return http.get(`/admin/employee/${id}/change-status`)
    }
}