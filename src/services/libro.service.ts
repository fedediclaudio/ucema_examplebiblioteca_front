import { Injectable } from '@angular/core';
import { Libro } from 'src/model/Libro';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  _url : string = 'http://localhost:8081/api/'

  constructor(private http: HttpClient) {
  }

  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this._url + 'libro')
  }

  getLibroByISBN(isbn: string): Observable<Libro> {
    return this.http.get<Libro>(this._url + 'libro/isbn/' + isbn)
  }

  addLibro(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this._url + 'libro', libro)
  }


}
