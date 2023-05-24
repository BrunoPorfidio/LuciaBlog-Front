import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Publicacion } from 'src/app/Models/Publicacion';
import { PublicacionService } from 'src/app/Services/publicacion.service';
import { TokenService } from 'src/app/Services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-nuevo-publicacion',
  templateUrl: './modal-nuevo-publicacion.component.html',
  styleUrls: ['./modal-nuevo-publicacion.component.css'],
})
export class ModalNuevoPublicacionComponent implements OnInit {
  publicacion: Publicacion = new Publicacion('', '', '', 0, '', '', 0, '', '');

  public imagenes: any = [];
  public previsualizacion: string;

  roles: string[];
  isAdmin = false;

  constructor(
    private publicacionService: PublicacionService,
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

  publicar(): void {
    const formData = {
      titulo: this.publicacion.titulo,

      fotoLibro: this.previsualizacion,

      autor: this.publicacion.autor,

      anoPublicacion: this.publicacion.anoPublicacion,

      editorial: this.publicacion.editorial,

      genero: this.publicacion.genero,

      numPaginas: this.publicacion.numPaginas,

      sinopsis: this.publicacion.sinopsis,

      resenia: this.publicacion.resenia,
    };
    this.publicacionService.crearPublicacion(formData).subscribe(
      (data) => {
        Swal.fire(
          'Reseña Publicada!',
          'Se ha publicado con exito',
          'success'
        )
        this.router.navigate(['/publicaciones']);
      },
      (err) => {
        Swal.fire(
          'ERROR!',
          'Ah ocurrido un error al publicar la Reseña',
          'error'
        )
      }
    );
  }

  capturarImagen(event: any) {
    const imagenCapturada = event.target.files[0];
    this.extraerBase64(imagenCapturada).then((imagen: any) => {
      this.previsualizacion = imagen.base;
    });
  }

  extraerBase64 = async ($event: any) =>
    new Promise((resolve, reject) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            base: reader.result,
          });
        };
        reader.onerror = (error) => {
          resolve({
            base: null,
          });
        };
      } catch (e) {}
    });
}
