import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const TOKEN_KEY = 'X-Access-Token';

const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {



  constructor(private http:HttpClient) { }

  login(f:FormData) {
    const url: string = environment.baseUrl + 'login.php';

    return this.http.post(url,f);
  }

  signOut(): void {
    window.localStorage.clear();
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }


  public getToken(): string | null {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) {
      return token;
    }
    return null;
  }


  public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }








  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

}
