export class Colaboraciones{
    idColaboraciones?: number;

    titulo: String;

    fotoLibro: File;

    autor: String;

    anoPublicacion: number;

    genero: String;

    numPaginas: number;

    sinopsis: String;

    resenia: String;

    constructor(

        titulo: String,

        fotoLibro: File,

        autor: String,

        anoPublicacion: number,

        genero: String,

        numPaginas: number,

        sinopsis: String,

        resenia: String
    ){
        this.titulo = titulo;

        this.fotoLibro = fotoLibro;

        this.autor = autor;

        anoPublicacion = anoPublicacion;

        this.genero = genero;

        this.numPaginas = numPaginas;

        this.sinopsis = sinopsis;

        this.resenia = resenia;
    }

}