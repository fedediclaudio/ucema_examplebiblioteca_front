import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Libro } from 'src/model/Libro';
import { LibroService } from 'src/services/libro.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  isbn?: string
  libro : Libro | undefined

  constructor(private route:ActivatedRoute, 
    private location:Location, 
    private libroService: LibroService) { 
      this.libro = undefined
    }

  ngOnInit(): void {
    this.isbn = this.route.snapshot.paramMap.get('isbn')!
    this.libro = this.libroService.getLibroByISBN(this.isbn)!
  }

  back() {
    this.location.back()
  }

  

}
