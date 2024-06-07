import { Injectable } from '@angular/core';
import { Usuario } from 'src/model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios? : Array<Usuario>

  constructor() {
    const usuario1: Usuario = new Usuario("Jhon", "Doe", 2);
    this.usuarios = [usuario1];
   }

  getUsuarioByName(name: string): Usuario | undefined {
    return this.usuarios?.find(usuario => usuario.getNombre() === name)
  }
}
