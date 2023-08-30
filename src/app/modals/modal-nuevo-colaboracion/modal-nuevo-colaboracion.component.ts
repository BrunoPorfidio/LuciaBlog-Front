import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Colaboraciones } from 'src/app/Models/Colaboraciones'; 
import { ColaboracionesService } from 'src/app/Services/colaboraciones.service'; 
import { TokenService } from 'src/app/Services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-nuevo-colaboracion',
  templateUrl: './modal-nuevo-colaboracion.component.html',
  styleUrls: ['./modal-nuevo-colaboracion.component.css']
})
export class ModalNuevoColaboracionComponent implements OnInit {

  colaboraciones: Colaboraciones = new Colaboraciones('', '', '', 0, '', '', 0, '', '');

  public imagenes: any = [];
  public previsualizacion: string;

  roles: string[];
  isAdmin = false;

  constructor(
    private colaboracionesService: ColaboracionesService,
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
      titulo: this.colaboraciones.titulo,

      fotoLibro: this.previsualizacion,

      autor: this.colaboraciones.autor,

      anoPublicacion: this.colaboraciones.anoPublicacion,

      editorial: this.colaboraciones.editorial,

      genero: this.colaboraciones.genero,

      numPaginas: this.colaboraciones.numPaginas,

      sinopsis: this.colaboraciones.sinopsis,

      resenia: this.colaboraciones.resenia,
    };
    this.colaboracionesService.crearColaboracion(formData).subscribe(
      (data) => {
        Swal.fire(
          'Colaboracion Publicada!',
          'Se ha publicado con exito',
          'success'
        )
        this.router.navigate(['/colaboraciones']);
      },
      (err) => {
        Swal.fire(
          'ERROR!',
          'Ah ocurrido un error al publicar la Colaboracion',
          'error'
        )
      }
    );
  }
}
