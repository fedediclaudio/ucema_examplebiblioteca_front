import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Libro } from 'src/model/Libro';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  @Input() libros: Array<Libro> = [];

  constructor() {
    this.libros = [];
  }

  filtro: string = '';

  newCardForm = new FormGroup ({
    titulo: new FormControl(''),
    autor: new FormControl(''),
    editorial: new FormControl(''),
    isbn: new FormControl(''),
    anioPublicacion: new FormControl(''),
    estado: new FormControl('Disponible')
  })

  changeFiltro() {
    console.log(this.filtro);
  }

  onSubmit() {
    let libro: Libro = new Libro(
      this.newCardForm.value.titulo!, 
      this.newCardForm.value.autor!,
      this.newCardForm.value.editorial!,
      this.newCardForm.value.isbn!,
      Number(this.newCardForm.value.anioPublicacion)!, 
      this.newCardForm.value.estado!
    );
    console.log(libro);
    this.libros?.push(libro); // Agrega el libro al array de libros
    this.newCardForm.reset(); // Resetea el formulario
  }
}
