import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reflexiones } from 'src/app/Models/Reflexiones';
import { ReflexionesService } from 'src/app/Services/reflexiones.service';
import { TokenService } from 'src/app/Services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reflexiones',
  templateUrl: './reflexiones.component.html',
  styleUrls: ['./reflexiones.component.css']
})
export class ReflexionesComponent implements OnInit{

  reflexiones: Reflexiones[] = [];

  roles: string[];
  isAdmin = false;

  constructor(
    private reflexionService: ReflexionesService,
    private tokenService: TokenService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.mostrarReflexiones();

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol)=> {
      if (rol === 'ROLE_ADMIN'){
        this.isAdmin = true;
      }
    })
  }

  private mostrarReflexiones() {
    this.reflexionService.verReflexion().subscribe(
      (data) => {
        this.reflexiones = data;
      },
      (err) => {
        Swal.fire(
          'ERROR!',
          'Error al cargar los Datos',
          'error'
        )
        this.router.navigate(['/luciBlog']);
      }
    );
  }

}
