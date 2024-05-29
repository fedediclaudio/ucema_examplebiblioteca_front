export class Libro {
    private titulo: string;
    private autor: string;
    private editorial: string;
    private isbn: string;
    private anioPublicacion: number;
    private estado: string;

    constructor(titulo: string, autor: string, editorial: string, isbn:string, anioPublicacion: number, estado: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.isbn = isbn;
        this.anioPublicacion = anioPublicacion;
        this.estado = estado;
    }

    // Métodos getter y setter para acceder a los atributos privados

    getTitulo(): string {
        return this.titulo;
    }

    setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    getAutor(): string {
        return this.autor;
    }

    setAutor(autor: string): void {
        this.autor = autor;
    }

    getEditorial(): string {
        return this.editorial;
    }

    setEditorial(genero: string): void {
        this.editorial = genero;
    }

    getAnioPublicacion(): number {
        return this.anioPublicacion;
    }

    setAnioPublicacion(anioPublicacion: number): void {
        this.anioPublicacion = anioPublicacion;
    }

    getEstado(): string {
        return this.estado;
    }

    setEstado(estado: string): void {
        this.estado = estado;
    }

    getIsbn(): string {
        return this.isbn;
    }

    setIsbn(isbn: string): void {
        this.isbn = isbn;
    }

    puedeMostrarse():boolean {
        return this.estado === 'Disponible';
    }
}