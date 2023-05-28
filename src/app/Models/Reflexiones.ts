export class Reflexiones {

  idReflexion?: number;

  titulo: String;

  fotoReflexion: string;

  cuerpoReflexion: String;

  constructor(
    titulo: String,

    fotoReflexion: string,

    cuerpoReflexion: String,
  ){

    this.titulo = titulo;

    this.fotoReflexion = fotoReflexion;

    this.cuerpoReflexion = cuerpoReflexion;
  }
}
