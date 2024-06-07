import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  isbn?: string | null

  constructor(private route:ActivatedRoute, private location:Location ) { }

  ngOnInit(): void {
    this.isbn = this.route.snapshot.paramMap.get('isbn')
  }

  back() {
    this.location.back()
  }

  

}
