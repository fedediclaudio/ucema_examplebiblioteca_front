import { Injectable } from '@angular/core';
import { Usuario } from 'src/model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios? : Array<Usuario>

  constructor() {
   }

  getUsuarioByName(name: string): Usuario | undefined {
    return undefined
  }
}
