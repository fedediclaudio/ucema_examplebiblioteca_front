import { Injectable } from '@angular/core';
import { Libro } from 'src/model/Libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  libros : Array<Libro>

  constructor() {
    const libro1 = new Libro("El principito", "Antoine de Saint-Exupéry", "una editorial", "000000111111", 1943, "Disponible")
    const libro2 = new Libro("1984", "George Orwell","una editorial","000000111112", 1949, "Disponible")
    const libro3 = new Libro("Cien años de soledad", "Gabriel García Márquez","una editorial", "000000113111", 1967, "Disponible")
    const libro4 = new Libro("Rayuela", "Julio Cortázar", "una editorial","000000111411",1963, "Disponible")
    const libro5 = new Libro("El Aleph", "Jorge Luis Borges", "una editorial","000000151111", 1949, "Prestado")
    this.libros = [libro1, libro2, libro3, libro4, libro5]
   }

  getLibros(){
    return this.libros
  }

  getLibroByISBN(isbn: string){
    return this.libros.find(libro => libro.getIsbn() === isbn)
  }
}
