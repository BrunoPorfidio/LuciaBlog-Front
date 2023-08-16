import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colaboraciones } from 'src/app/Models/Colaboraciones';
import { Publicacion } from 'src/app/Models/Publicacion';
import { ColaboracionesService } from 'src/app/Services/colaboraciones.service';
import { PublicacionService } from 'src/app/Services/publicacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent implements OnInit{

  public publicacion: Publicacion;

  public colaboracion: Colaboraciones;

  constructor(
    private publicacionService: PublicacionService,
    private colaboracionService: ColaboracionesService,
  ){}

  ngOnInit(): void {
    
    this.verUltimaPublicacion();

    this.verUltimaColaboracion();
    
  }

  public verUltimaPublicacion(){
    this.publicacionService.verUltimo().subscribe(
      (data) => {
        this.publicacion = data;
      },
      (err) => {
        Swal.fire(
          'ERROR!',
          'Error al cargar la Ultima Reseña',
          'error'
        )
      }
    );
  }

  public verUltimaColaboracion(){
    this.colaboracionService.verUltimo().subscribe(
      (data) => {
        this.colaboracion = data;
      },
      (err) => {
        Swal.fire(
          'ERROR!',
          'Error al cargar la Ultima Colaboracion',
          'error'
        )
      }
    )
  }

}
