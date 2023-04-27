export class Publicacion{

    idPublicacion?: number;

    titulo: String;

    fotoLibro: String;

    autor: String;

    anoPublicacion: number;

    genero: String;

    numPaginas: number;

    sinopsis: String;

    resenia: String;

    constructor(
        titulo: String,

        fotoLibro: String,
        
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

        this.anoPublicacion = anoPublicacion;

        this.genero = genero;

        this.numPaginas = numPaginas;

        this.sinopsis = sinopsis;

        this.resenia = resenia;
    }
}