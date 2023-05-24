export class Novedades{

    idNovedad?: number;

    tituloNovedad: String;

    fotoLibro: string;

    descripcionNovedad: String;


    constructor(

        tituloNovedad: String,

        fotoLibro: string,

        descripcionNovedad: String,
    
    ){
        this.tituloNovedad = tituloNovedad;

        this.fotoLibro = fotoLibro;

        this.descripcionNovedad = descripcionNovedad;
    }
}