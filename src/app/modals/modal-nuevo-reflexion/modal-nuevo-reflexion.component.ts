import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Reflexiones } from 'src/app/Models/Reflexiones'; 
import { ReflexionesService } from 'src/app/Services/reflexiones.service'; 
import { TokenService } from 'src/app/Services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-nuevo-reflexion',
  templateUrl: './modal-nuevo-reflexion.component.html',
  styleUrls: ['./modal-nuevo-reflexion.component.css']
})
export class ModalNuevoReflexionComponent  implements OnInit {

  reflexiones: Reflexiones = new Reflexiones('', '', '');

  public imagenes: any = [];
  public previsualizacion: string;

  roles: string[];
  isAdmin = false;

  constructor(
    private reflexionesService: ReflexionesService,
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
      titulo: this.reflexiones.titulo,

      fotoReflexion: this.previsualizacion,

      cuerpoReflexion: this.reflexiones.cuerpoReflexion,

    };
    this.reflexionesService.crearReflexion(formData).subscribe(
      (data) => {
        Swal.fire(
          'Reflexion Publicada!',
          'Se ha publicado con exito',
          'success'
        )
        this.router.navigate(['/reflexiones']);
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