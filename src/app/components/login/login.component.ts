import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/Models/LoginUsuario';
import { AuthService } from 'src/app/Services/auth.service'; 
import { TokenService } from 'src/app/Services/token.service'; 
import { environments } from 'src/app/environments/environment.prod'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  nombreUsuario: string;
  password: string;
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  roles: string[] = [];
  errMsj!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService, 
    private ruta: Router,){
  }


  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
      this.checkTokenLocal();
    }
  }


  checkTokenLocal(){
    if(localStorage.getItem('token')){
      this.ruta.navigate(['/luciBlog'])
    }
  }

  onLogin(event: Event): void {

    event.preventDefault;
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
      this.authService.login(this.loginUsuario).subscribe({next: data => {
        this.isLogged = true;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Has Iniciado Sesion',
          showConfirmButton: false,
          timer: 1500
        })
        this.ruta.navigate(['/luciBlog'])
      }, 
      error: err => {
        this.isLogged = false;
        this.errMsj = err.error.mensaje;
        Swal.fire(
          'ERROR!',
          'Error en Usuario o Conrtraseña',
          'error'
        )
      }})
    }

    volver(){
      this.ruta.navigate(['/luciBlog'])
    }
  }