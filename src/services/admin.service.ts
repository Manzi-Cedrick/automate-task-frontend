import { ICustomer, IRole, ITask } from "../utils/custom.data";
import { http } from "../utils/https/http-common";

class AdminService {
    getEmployee() {
        return http.get('/admin/employee/list-all');
    }
    resetEmployeePassword(id: string) {
        return http.get(`/admin/employee/${id}/reset-password`)
    }
    changeEmployeeStatus(id: string) {
        return http.get(`/admin/employee/${id}/change-status`)
    }
    createCustomer(data: ICustomer) {
        return http.post('/admin/customer/create', data)
    }
    updateCustomer(id: string, data: any) {
        return http.put(`/admin/customer/${id}`, data)
    }
    deleteCustomer(id: string) {
        return http.delete(`/admin/customer/${id}`)
    }
    showCustomers() {
        return http.get('/admin/customer/list-all');
    }
    singleCustomer(id: string) {
        return http.get(`/admin/customer/${id}`)
    }
    updateRole(id: string, body: Partial<IRole>) {
        return http.patch(`/admin/${id}`, body)
    }
    createRole(body: IRole) {
        return http.post(`/admin/role/create`, body)
    }
    getRoles() {
        return http.get(`/admin/role/list-all`)
    }
    deleteRole(id: string) {
        return http.get(`/admin/role/${id}`)
    }
    createTask(data: ITask) {
        return http.post('/admin/task/create', data)
    }
    updateTask(id: string, data: Partial<ITask>) {
        return http.put(`/admin/task/${id}`, data)
    }
    deleteTask(id: string) {
        return http.delete(`/admin/task/${id}`)
    }
    showTasks() {
        return http.get('/admin/task/list-all');
    }
    singleTask(id: string) {
        return http.get(`/admin/task/${id}`)
    }
    customer_billing_report(id: string | undefined) {
        return http.get(`/admin/customer/billing/report/${id}`)
    }
    employee_billing_report(id: string | undefined) {
        return http.get(`/admin/employee/timesheet/report/${id}`)
    }
}
const service = new AdminService()
export default service