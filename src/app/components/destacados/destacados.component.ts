import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacion } from 'src/app/Models/Publicacion';
import { PublicacionService } from 'src/app/Services/publicacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent implements OnInit{

  public publicacion: Publicacion;

  constructor(
    private publicacionService: PublicacionService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.publicacionService.verUltimo().subscribe(
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

}
