export class Product {
    id!: number;
    name: string;
    price: number;
    titulo!: string;
    autor!: string;
    editorial!: string;
    precio!: number;
    stock!: number;
    descripcion!: string;
    categoria!: string;
    imagenPhat!: string;
    imagenURL!: string;

    constructor(name: string, price: number,titulo: string,
        autor: string,
        editorial: string,
        precio: number,
        stock: number,
        descripcion: string,
        categoria: string,
        imagenPhat: string,
        imagenURL: string) {
        this.name = name;
        this.price = price;
        this.titulo = titulo;
		this.autor = autor;
		this.editorial = editorial;
		this.precio = precio;
		this.stock = stock;
		this.descripcion = descripcion;
		this.categoria = categoria;
		this.imagenPhat = imagenPhat;
		this.imagenURL = imagenURL;
    }

    
}
