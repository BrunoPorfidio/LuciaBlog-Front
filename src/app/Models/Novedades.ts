export class Novedades{

    idNovedad?: number;

    tituloNovedad: String;

    descripcionNovedad: String;

    urlNovedad: String;

    constructor(

        tituloNovedad: String,

        descripcionNovedad: String,
    
        urlNovedad: String
    ){
        this.tituloNovedad = tituloNovedad;

        this.descripcionNovedad = descripcionNovedad;

        this.urlNovedad = urlNovedad
    }
}