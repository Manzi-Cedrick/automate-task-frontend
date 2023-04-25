import { http } from "../utils/https/http-common";

export default class UserService {
    createUser(data: any) {
        return http.post('/admin/user', data)
    }
    updateUser(id: string, data: any) {
        return http.put(`/admin/user/${id}`, data)
    }
    deleteUser(id: string) {
        return http.delete(`/admin/user/${id}`)
    }
    index(){
        return http.get('/admin/users');
    }
    showUser(id:string) {
        return http.get(`/admin/user/${id}`)
    }
}