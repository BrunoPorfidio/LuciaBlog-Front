export class Colaboraciones{
    
    idColaboraciones?: number;

    titulo: String;

    fotoLibro: string;

    autor: String;

    anoPublicacion: Number;

    editorial: String;

    genero: String;

    numPaginas: Number;

    sinopsis: String;

    resenia: String;

    constructor(

        titulo: String,

        fotoLibro: string,

        autor: String,

        anoPublicacion: number,

        editorial: String,

        genero: String,

        numPaginas: number,

        sinopsis: String,

        resenia: String
    ){
        this.titulo = titulo;

        this.fotoLibro = fotoLibro;

        this.autor = autor;

        this.anoPublicacion = anoPublicacion;

        this.editorial = editorial;

        this.genero = genero;

        this.numPaginas = numPaginas;

        this.sinopsis = sinopsis;

        this.resenia = resenia;
    }

}