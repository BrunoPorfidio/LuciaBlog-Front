import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Novedades } from 'src/app/Models/Novedades';
import { NovedadesService } from 'src/app/Services/novedades.service';
import { TokenService } from 'src/app/Services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit{

  public novedades: Novedades[] = [];

  roles: string[];
  isAdmin = false;

  constructor(
    private novedadesService: NovedadesService,
    private tokenService: TokenService,
    private router: Router
  ){}

  ngOnInit(): void {

    this.mostrarNovedades();

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol)=> {
      if (rol === 'ROLE_ADMIN'){
        this.isAdmin = true;
      }
    })
  }

  private mostrarNovedades(){
    this.novedadesService.verNovedades().subscribe(
      (data) => {
        this.novedades = data;
      },
      (err) => {
        Swal.fire(
          'ERROR!',
          'Error al cargar los Datos',
          'error'
        )
        this.router.navigate(['/luciBlog']);
      }
    )
  }

}
