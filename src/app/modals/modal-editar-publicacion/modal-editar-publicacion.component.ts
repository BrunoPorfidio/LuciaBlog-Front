import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicacion } from 'src/app/Models/Publicacion';
import { PublicacionService } from 'src/app/Services/publicacion.service';
import { TokenService } from 'src/app/Services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-editar-publicacion',
  templateUrl: './modal-editar-publicacion.component.html',
  styleUrls: ['./modal-editar-publicacion.component.css']
})
export class ModalEditarPublicacionComponent implements OnInit{
  
  public publicacion: Publicacion;

  roles: string[];
  isAdmin = false;

  public imagenes: any = [];
  public previsualizacion: string;
  public imagenBase64: String;

  constructor(
    private publicacionService: PublicacionService,
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
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

    const id = this.activatedRoute.snapshot.params['idPublicacion'];
  this.publicacionService.buscarPublicacion(id).subscribe(
    data => {
      this.publicacion = data;
      this.previsualizacion = this.publicacion.fotoLibro;
    },
     err => {
      alert("Error al cargar la Reseña");
      this.router.navigate(['/publicaciones']);
    }
    )
  }

  cargarImagenDesdeURL(event: ClipboardEvent) {
    const pastedText = event.clipboardData?.getData('text');
    if (pastedText) {
      this.previsualizacion = pastedText;
    }
  }

  editar(): void{
    const id = this.activatedRoute.snapshot.params['idPublicacion'];
    this.publicacionService.editarPublicacion(id, this.publicacion).subscribe(
      data => {
        Swal.fire(
          'Reseña Editada!',
          'Se ha editado con exito',
          'success'
        )
        this.router.navigate(['/publicacion/' + id])
      }, err => {
        Swal.fire(
          'ERROR!',
          'Ah ocurrido un error al editar la Reseña',
          'error'
        )
        this.router.navigate(['/publicaciones']);
      })
  }
}