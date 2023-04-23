import { http } from "../utils/https/http-common";

export default class GenreService {
    getGenreDetails() {
        return http.get(`/songs/genres`)
    }
    getSongsByGenre(id: any) {
        return http.get(`/songs/${id}`)
    }
}