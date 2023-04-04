export class NuevoUsuario {
    nombre: String;
    nombreUsuario: String;
    email: String;
    password: String;
  
    constructor(
      nombre: String,
      nombreUsuario: String,
      email: String,
      password: String
    ) {
      this.nombre = nombre;
      this.nombreUsuario = nombreUsuario;
      this.email = email;
      this.password = password;
    }
  }