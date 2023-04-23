import { http } from "../utils/https/http-common";

export default class SongService {
    createSong(data:any){
        return http.post(`/songs`,data)
    }
    updateSong(id:string,data:any){
        return http.put(`/songs/${id}`,data)
    }
    displaySongs(){
        return http.get(`/songs`);
    }
    singleSong(id:string){
        return http.get(`/songs/${id}`)
    }
    deleteSong(id:string){
        return http.delete(`/songs/${id}`)
    }
}