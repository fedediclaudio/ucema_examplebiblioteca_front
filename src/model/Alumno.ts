import { Usuario } from "./Usuario";
import { Prestamo } from "./Prestamo";

export class Alumno extends Usuario {

    private carrera: string;
    private anio: string;

    // Constructor

    constructor(id: number, username: string, password: string, nombreCompleto: string, dni: string, email: string, fechaNacimiento: Date, prestamos: Prestamo[], carrera: string, anio: string) {
        super(id, username, password, nombreCompleto, dni, email, fechaNacimiento, prestamos);
        this.carrera = carrera;
        this.anio = anio;
    }

    // Métodos getter y setter

    getCarrera(): string {
        return this.carrera;
    }

    setCarrera(carrera: string): void {
        this.carrera = carrera;
    }

    getAnio(): string {
        return this.anio;
    }

    setAnio(anio: string): void {
        this.anio = anio;
    }


}