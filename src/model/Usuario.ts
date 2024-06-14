import { Prestamo } from "./Prestamo";

export abstract class Usuario {
    private id: number;
    private username: string;
    private password: string;
    private nombreCompleto: string;
    private dni: string;
    private email: string;
    private fechaNacimiento: Date;
    private prestamos: Prestamo[];
    
    constructor(id: number, username: string, password: string, nombreCompleto: string, dni: string, email: string, fechaNacimiento: Date, prestamos: Prestamo[]) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.nombreCompleto = nombreCompleto;
        this.dni = dni;
        this.email = email;
        this.fechaNacimiento = fechaNacimiento;
        this.prestamos = prestamos;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getUsername(): string {
        return this.username;
    }

    setUsername(username: string): void {
        this.username = username;
    }

    getPassword(): string {
        return this.password;
    }

    setPassword(password: string): void {
        this.password = password;
    }

    getNombreCompleto(): string {
        return this.nombreCompleto;
    }

    setNombreCompleto(nombreCompleto: string): void {
        this.nombreCompleto = nombreCompleto;
    }

    getDni(): string {
        return this.dni;
    }

    setDni(dni: string): void {
        this.dni = dni;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    getFechaNacimiento(): Date {
        return this.fechaNacimiento;
    }

    setFechaNacimiento(fechaNacimiento: Date): void {
        this.fechaNacimiento = fechaNacimiento;
    }

    getPrestamos(): Prestamo[] {
        return this.prestamos;
    }

    setPrestamos(prestamos: Prestamo[]): void {
        this.prestamos = prestamos;
    }

    agregarPrestamo(prestamo: Prestamo): void {
        this.prestamos.push(prestamo);
    }

    eliminarPrestamo(prestamo: Prestamo): void {
        this.prestamos = this.prestamos.filter(p => p.getId() !== prestamo.getId());
    }

}