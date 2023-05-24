export class Reflexiones {

  idReflexion?: number;

  titulo: String;

  subtitulo: String;

  fotoReflexion: string;

  cuerpoReflexion: String;

  constructor(
    titulo: String,

    subtitulo: String,

    fotoReflexion: string,

    cuerpoReflexion: String,
  ){

    this.titulo = titulo;

    this.subtitulo = subtitulo;

    this.fotoReflexion = fotoReflexion;

    this.cuerpoReflexion = cuerpoReflexion;
  }
}
