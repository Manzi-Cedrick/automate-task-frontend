import { http } from "../utils/https/http-common";

export default class RoleService {
    changeRole(id: string) {
        return http.get(`/admin/${id}/change-role`)
    }
}