import { http } from "../utils/https/http-common";

export default class CustomerService {
    createCustomer(data: any) {
        return http.post('/admin/customer/create', data)
    }
    updateCustomer(id: string, data: any) {
        return http.put(`/admin/customer/${id}`, data)
    }
    deleteCustomer(id: string) {
        return http.delete(`/admin/customer/${id}`)
    }
    showCustomers(){
        return http.get('/admin/customer/list-all');
    }
    singleCustomer(id:string) {
        return http.get(`/admin/customer/${id}`)
    }
}