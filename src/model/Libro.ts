export class Libro {
    private id?: number;
    public titulo: string;
    private autor: string;
    private editorial: string;
    private isbn: string;
    private anio: number;
    private estado: string;

    constructor(titulo: string, autor: string, editorial: string, isbn:string, anioPublicacion: number, estado: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.isbn = isbn;
        this.anio = anioPublicacion;
        this.estado = estado;
    }

    // Métodos getter y setter para acceder a los atributos privados

    getId(): number | undefined {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    public getTitulo(): string {
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

    getAnio(): number {
        return this.anio;
    }

    setAnio(anioPublicacion: number): void {
        this.anio = anioPublicacion;
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