import { Libro } from "./Libro";
import { Usuario } from "./Usuario";

export class Prestamo {
    private id: number;
    private fechaPrestamo: Date;
    private fechaDevolucion: Date;
    private devuelto: boolean;
    private usuario: Usuario;
    private libros: Libro[];

    // Constructor

    constructor(id: number, fechaPrestamo: Date, fechaDevolucion: Date, devuelto: boolean, usuario: Usuario, libros: Libro[]) {
        this.id = id;
        this.fechaPrestamo = fechaPrestamo;
        this.fechaDevolucion = fechaDevolucion;
        this.devuelto = devuelto;
        this.usuario = usuario;
        this.libros = libros;
    }

    // Metodos getter y setter

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getFechaPrestamo(): Date {
        return this.fechaPrestamo;
    }

    setFechaPrestamo(fechaPrestamo: Date): void {
        this.fechaPrestamo = fechaPrestamo;
    }

    getFechaDevolucion(): Date {
        return this.fechaDevolucion;
    }

    setFechaDevolucion(fechaDevolucion: Date): void {
        this.fechaDevolucion = fechaDevolucion;
    }

    getDevuelto(): boolean {
        return this.devuelto;
    }

    setDevuelto(devuelto: boolean): void {
        this.devuelto = devuelto;
    }

    getUsuario(): Usuario {
        return this.usuario;
    }

    setUsuario(usuario: Usuario): void {
        this.usuario = usuario;
    }

    getLibros(): Libro[] {
        return this.libros;
    }   

    setLibros(libros: Libro[]): void {
        this.libros = libros;
    }       

}