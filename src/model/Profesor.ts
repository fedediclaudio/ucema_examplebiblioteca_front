import { Usuario } from "./Usuario";
import { Prestamo } from "./Prestamo";

export class Profesor extends Usuario {

    private fechaIngreso: Date;

    // Constructor

    constructor(id: number, username: string, password: string, nombreCompleto: string, dni: string, email: string, fechaNacimiento: Date, prestamos: Prestamo[], fechaIngreso: Date) {
        super(id, username, password, nombreCompleto, dni, email, fechaNacimiento, prestamos);
        this.fechaIngreso = fechaIngreso;
    }

    // Métodos getter y setter

    getFechaIngreso(): Date {
        return this.fechaIngreso;
    }

    setFechaIngreso(fechaIngreso: Date): void {
        this.fechaIngreso = fechaIngreso;
    }
}