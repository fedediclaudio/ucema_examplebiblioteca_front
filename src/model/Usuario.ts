
export class Usuario {
    private nombre: string;
    private apellido: string;
    private numeroPrestamos: number;

    constructor(nombre: string, apellido: string, numeroPrestamos: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.numeroPrestamos = numeroPrestamos;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getApellido(): string {
        return this.apellido;
    }

    setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    getNumeroPrestamos(): number {
        return this.numeroPrestamos;
    }

    setNumeroPrestamos(numeroPrestamos: number): void {
        this.numeroPrestamos = numeroPrestamos;
    }
}