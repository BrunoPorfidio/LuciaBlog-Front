import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacion } from 'src/app/Models/Publicacion'; 
import { PublicacionService } from 'src/app/Services/publicacion.service';
import { TokenService } from 'src/app/Services/token.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css'],
})
export class PublicacionesComponent implements OnInit {

  public publicacion: Publicacion[] = [];

  roles: string[];
  isAdmin = false;

  constructor(
    private publicacionService: PublicacionService,
    private tokenService: TokenService,
    private router: Router) {}
    

  ngOnInit(): void {
    this.mostrarPublicaciones();

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol)=> {
      if (rol === 'ROLE_ADMIN'){
        this.isAdmin = true;
      }
    })
  }

  private mostrarPublicaciones() {
    this.publicacionService.verPublicacion().subscribe(
      (data) => {
        this.publicacion = data;
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
