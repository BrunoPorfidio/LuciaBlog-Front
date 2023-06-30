import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service'; 
import { TokenService } from 'src/app/Services/token.service'; 
import { environments } from 'src/app/environments/environment.prod'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  isLogged = environments.isLogged;
  isAdmin = false;
  roles: string[];

  public active : boolean = false;

  constructor(
    private auth: AuthService,
    private tokenService: TokenService
  ){}

  ngOnInit(): void {
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
   
  }
  
  cerrarsesion(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  setActive() : void {
    this.active = !this.active;
  }

}
