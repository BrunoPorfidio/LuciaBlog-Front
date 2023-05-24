import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colaboraciones } from 'src/app/Models/Colaboraciones';
import { ColaboracionesService } from 'src/app/Services/colaboraciones.service';
import { TokenService } from 'src/app/Services/token.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-colaboraciones',
  templateUrl: './colaboraciones.component.html',
  styleUrls: ['./colaboraciones.component.css']
})
export class ColaboracionesComponent implements OnInit{

  public colaboraciones: Colaboraciones[] = [];

  roles: string[];
  isAdmin = false;

  constructor(
    private colaboracionesService: ColaboracionesService,
    private tokenService: TokenService,
    private router: Router) {}

  ngOnInit(): void {

    this.mostrarColaboraciones();

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol)=> {
      if (rol === 'ROLE_ADMIN'){
        this.isAdmin = true;
      }
    })
  }

  private mostrarColaboraciones() {
    this.colaboracionesService.verColaboraciones().subscribe(
      (data) => {
        this.colaboraciones = data;
      },
      (err) => {
        Swal.fire(
          'ERROR!',
          'Error al cargar los Datos',
          'error'
        )
        this.router.navigate(['/publicaciones']);
      }
    );
  }

}
