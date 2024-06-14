import { Component, OnInit } from '@angular/core';
import { Prestamo } from 'src/model/Prestamo';
import { PrestamoService } from 'src/services/prestamo.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit{

  prestamos: any[] = []

  constructor(private prestamoService:PrestamoService) {

  }

  ngOnInit(): void {
    this.prestamoService.getPrestamos().subscribe((prestamos) => {
      console.log(prestamos)
      this.prestamos = prestamos
    }
    )
  }

    

}
