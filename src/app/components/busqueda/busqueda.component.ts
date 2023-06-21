import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colaboraciones } from 'src/app/Models/Colaboraciones';
import { Publicacion } from 'src/app/Models/Publicacion';
import { ColaboracionesService } from 'src/app/Services/colaboraciones.service';
import { PublicacionService } from 'src/app/Services/publicacion.service';
import { Reflexiones } from 'src/app/Models/Reflexiones';
import { ReflexionesService } from 'src/app/Services/reflexiones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit  {

  public publicacion: Publicacion[] = [];
  public colaboraciones: Colaboraciones[] = [];
  public reflexiones: Reflexiones[] = [];

  filterPost = "";

  
  ngOnInit(): void {

    this.mostrarPublicaciones();
    this.mostrarColaboraciones();
    this.mostrarReflexiones();

  }

  constructor(
    private publicacionService: PublicacionService,
    private colaboracionesService: ColaboracionesService,
    private reflexionService: ReflexionesService,
    private router: Router
  ){};


   private mostrarPublicaciones(){
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
        this.router.navigate(['/luciBlog']);
      }
    );
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
        this.router.navigate(['/luciBlog']);
      }
    );
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
