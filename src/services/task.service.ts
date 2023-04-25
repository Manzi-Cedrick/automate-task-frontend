import { http } from "../utils/https/http-common";

export default class TaskService {
    createTask(data: any) {
        return http.post('/admin/task/create', data)
    }
    updateTask(id: string, data: any) {
        return http.put(`/admin/task/${id}`, data)
    }
    deleteTask(id: string) {
        return http.delete(`/admin/task/${id}`)
    }
    showTasks(){
        return http.get('/admin/task/list-all');
    }
    singleTask(id:string) {
        return http.get(`/admin/task/${id}`)
    }
}