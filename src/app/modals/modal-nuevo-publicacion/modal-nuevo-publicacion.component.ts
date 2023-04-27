import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Publicacion } from 'src/app/Models/Publicacion';
import { PublicacionService } from 'src/app/Services/publicacion.service';

@Component({
  selector: 'app-modal-nuevo-publicacion',
  templateUrl: './modal-nuevo-publicacion.component.html',
  styleUrls: ['./modal-nuevo-publicacion.component.css'],
})
export class ModalNuevoPublicacionComponent implements OnInit {
  titulo: String;

  fotoLibro: String;

  autor: String;

  anoPublicacion: number;

  genero: String;

  numPaginas: number;

  sinopsis: String;

  resenia: String;

  public imagenes: any = [];
  public previsualizacion: string;

  constructor(
    private publicacionService: PublicacionService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit(): void {}

  publicar(): void {
    const publicacion = new Publicacion(
      this.titulo,
      this.fotoLibro,
      this.autor,
      this.anoPublicacion,
      this.genero,
      this.numPaginas,
      this.sinopsis,
      this.resenia
    );
    this.publicacionService.crearPublicacion(publicacion).subscribe(
      (data) => {
        this.router.navigate(['/publicaciones']);
      },
      (err) => {
        alert('Error al Crear la Reseña');
      }
    );
  }

  obtener(e: any) {
    this.fotoLibro = e[0].base64;
  }

  capturarImagen(event: any) {
    const imagenCapturada = event.target.files[0];
    this.extraerBase64(imagenCapturada).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(imagenCapturada);
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
