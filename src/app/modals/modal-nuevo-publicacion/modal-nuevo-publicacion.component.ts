import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacion } from 'src/app/Models/Publicacion';
import { PublicacionService } from 'src/app/Services/publicacion.service';
import { TokenService } from 'src/app/Services/token.service';
import Swal from 'sweetalert2';
import {NgxImageCompressService} from 'ngx-image-compress';

@Component({
  selector: 'app-modal-nuevo-publicacion',
  templateUrl: './modal-nuevo-publicacion.component.html',
  styleUrls: ['./modal-nuevo-publicacion.component.css'],
})
export class ModalNuevoPublicacionComponent implements OnInit {
  publicacion: Publicacion = new Publicacion('', '', '', 0, '', '', 0, '', '');

  public previsualizacion: string;

  roles: string[];
  isAdmin = false;

  constructor(
    private publicacionService: PublicacionService,
    private router: Router,
    private tokenService: TokenService,
    private imageCompress: NgxImageCompressService
  ) {}


  cargarImagenDesdeURL(event: ClipboardEvent) {
    const pastedText = event.clipboardData?.getData('text');
    if (pastedText) {
      this.previsualizacion = pastedText;
    }
  }
  

//   compressFile() {
//     this.imageCompress.uploadFile().then(({image, orientation}) => {

//         this.imageCompress
//             .compressFile(image, orientation, 55, 50) // 50% ratio, 50% quality
//             .then(compressedImage => {
//                 this.previsualizacion = compressedImage;
//             });
//     });
// }

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


}
