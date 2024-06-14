import { Component, Input } from '@angular/core';
import { Libro } from 'src/model/Libro';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent {


  @Input() libro!: any

  disabledButton: boolean = false


  onClickAgregar() {
    alert('Agregado al carrito')
    console.log(this.libro)
  }

}
