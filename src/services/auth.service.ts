import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { http } from "../utils/https/http-common";

class AuthService {
  signup(data: any) {
    return http.post('/auth/register',data);
  }
  login(data: any) {
    return http.post('/auth/login',data);
  }
  getDecToken() {
    if (typeof window !== "undefined") {
      return Cookies.get('LOCAL_STORAGE_TOKEN_KEY');
    }
    return;
  }
  setToken(token: string) {
    Cookies.set('LOCAL_STORAGE_TOKEN_KEY', token);
  }
  isLoggedIn() {
    const token = this.getDecToken();
    if (token) {
      try {
        return http.get('/auth/user');
      } catch (error: any) {
        console.log(error);
        return false;
      }
    } else {
      console.log('No token');
      return;
    }
  }
  logout() {
    this.removeToken();
    return (window.location.href = '/login');
  }
  removeToken() {
    Cookies.remove('LOCAL_STORAGE_TOKEN_KEY');
  }
}

const authService = new AuthService();
export default authService;
