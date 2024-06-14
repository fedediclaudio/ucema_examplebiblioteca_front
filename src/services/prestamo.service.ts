import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestamo } from 'src/model/Prestamo';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  _url : string = 'http://localhost:8081/api/'

  constructor(private http: HttpClient) { }

  getPrestamos() : Observable<Prestamo[]> {
    const base64 = localStorage.getItem('user');
    const headers = { 'Authorization': 'Basic ' + base64}
    return this.http.get<Prestamo[]>(this._url + 'prestamo/misprestamos', {headers})
  }
}
