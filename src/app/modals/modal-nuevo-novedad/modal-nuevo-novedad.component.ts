import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Novedades } from 'src/app/Models/Novedades';
import { NovedadesService } from 'src/app/Services/novedades.service';
import { TokenService } from 'src/app/Services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-nuevo-novedad',
  templateUrl: './modal-nuevo-novedad.component.html',
  styleUrls: ['./modal-nuevo-novedad.component.css']
})
export class ModalNuevoNovedadComponent implements OnInit {

  novedades: Novedades = new Novedades('', '', '');

  public imagenes: any = [];
  public previsualizacion: string;

  roles: string[];
  isAdmin = false;

  constructor(
    private novedadesService: NovedadesService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol)=> {
      if (rol === 'ROLE_ADMIN'){
        this.isAdmin = true;
      }
    })

  }

  cargarImagenDesdeURL(event: ClipboardEvent) {
    const pastedText = event.clipboardData?.getData('text');
    if (pastedText) {
      this.previsualizacion = pastedText;
    }
  }

  publicar(): void {
    const formData = {
      tituloNovedad: this.novedades.tituloNovedad,

      fotoLibro: this.previsualizacion,

      descripcionNovedad: this.novedades.descripcionNovedad,

    };
    this.novedadesService.crearNovedad(formData).subscribe(
      (data) => {
        Swal.fire(
          'Novedad Publicada!',
          'Se ha publicado con exito',
          'success'
        )
        this.router.navigate(['/luciBlog']);
      },
      (err) => {
        Swal.fire(
          'ERROR!',
          'Ah ocurrido un error al publicar la Novedad',
          'error'
        )
      }
    );
  }
}