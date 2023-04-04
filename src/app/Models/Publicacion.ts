export class Publicacion{

    idPublicacion?: number;

    titulo: String;

    subtitulo: String;

    fotoLibro: File;

    constructor(titulo: String, subTitulo: String, fotoLibro: File){

        this.titulo = titulo;

        this.subtitulo = subTitulo;

        this.fotoLibro = fotoLibro;
    }
}