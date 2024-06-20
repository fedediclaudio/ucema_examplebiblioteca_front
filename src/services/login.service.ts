import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from 'src/model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  _url : string = 'http://localhost:8081/api/'

  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private loggedIn: Observable<boolean> = this.loggedInSubject.asObservable();
  
  

  constructor(private http: HttpClient) { }

  getIsLoggedInObservable(): Observable<boolean> {
    return this.loggedIn 
  }

  login(username: any, password: any): Observable<boolean> {
    localStorage.setItem('user', btoa(username + ":" + password))
    const obs: Observable<boolean> = this.http.post<boolean>(this._url + 'login', {"username": username, "password": password});
    obs.subscribe((res) => {
      if(!res) {
        localStorage.removeItem('user')
      }
      this.loggedInSubject.next(res)
    })
    return obs
  }

  isLoggedIn(): boolean {
    return this.loggedInSubject.value;
  }

  logout() {
    this.loggedInSubject.next(false)
    localStorage.removeItem('user')
  }

}
