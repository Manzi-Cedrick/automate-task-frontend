import { http } from "../utils/https/http-common";

export default class AlbumService {
    createAlbum(data: any) {
        return http.post('/albums', data)
    }
    updateAlbum(id: string, data: any) {
        return http.put(`/albums/${id}`, data)
    }
    deleteAlbum(id: string) {
        return http.delete(`/albums/${id}`)
    }
    showAlbum(){
        return http.get('/albums');
    }
    singleAlbum(id:string) {
        return http.get(`/albums/${id}`)
    }
}