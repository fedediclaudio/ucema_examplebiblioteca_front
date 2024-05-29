import { Component, Input } from '@angular/core';
import { Libro } from 'src/model/Libro';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  @Input() libros?: Array<Libro>

}
