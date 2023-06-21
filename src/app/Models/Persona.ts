export class Persona {
  id?: number;

  nombreEmp: String;

  nombre: String;

  apellido: String;

  acercaMi: String;

  celular: number;

  email: String;

  ubicacion: String;

  constructor(

    nombreEmp: String,

    nombre: String,

    apellido: String,

    acercaMi: String,

    celular: number,

    email: String,

    ubicacion: String

  ) {
    this.nombreEmp = nombreEmp;

    this.nombre = nombre;

    this.apellido = apellido;

    this.acercaMi = acercaMi;

    this.celular = celular;

    this.email = email;

    this.ubicacion = ubicacion;
  }
}
