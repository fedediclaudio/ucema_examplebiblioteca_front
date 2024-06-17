import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/model/Libro';
import { Usuario } from 'src/model/Usuario';
import { LibroService } from 'src/services/libro.service';
import { UsuarioService } from 'src/services/usuario.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  usuario: Usuario | undefined
  libros: Libro[] = []

  constructor(private usuarioService: UsuarioService, private libroService:LibroService) { 

  }

  ngOnInit(): void {
    this.libroService.getLibros().subscribe( (libros:Libro[]) => {
      this.libros = libros
      console.log(libros)
    } )
  }

}
