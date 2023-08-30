import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaboraciones } from 'src/app/Models/Colaboraciones';
import { ColaboracionesService } from 'src/app/Services/colaboraciones.service'; 
import { TokenService } from 'src/app/Services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-editar-colaboracion',
  templateUrl: './modal-editar-colaboracion.component.html',
  styleUrls: ['./modal-editar-colaboracion.component.css']
})
export class ModalEditarColaboracionComponent implements OnInit{
  
  public colaboraciones: Colaboraciones;

  roles: string[];
  isAdmin = false;

  public imagenes: any = [];
  public previsualizacion: string;
  public imagenBase64: String;

  constructor(
    private colaboracionesService: ColaboracionesService,
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

    const id = this.activatedRoute.snapshot.params['idColaboraciones'];
  this.colaboracionesService.buscarColaboracion(id).subscribe(
    data => {
      this.colaboraciones = data;
      this.previsualizacion = this.colaboraciones.fotoLibro;
    },
     err => {
      alert("Error al cargar la Colaboracion");
      this.router.navigate(['/colaboraciones']);
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
    const id = this.activatedRoute.snapshot.params['idColaboraciones'];
    this.colaboracionesService.editarColaboracion(id, this.colaboraciones).subscribe(
      data => {
        Swal.fire(
          'colaboracion Editada!',
          'Se ha editado con exito',
          'success'
        )
        this.router.navigate(['/colaboracion/'+ id])
      }, err => {
        Swal.fire(
          'ERROR!',
          'Ah ocurrido un error al editar la Colaboracion',
          'error'
        )
        this.router.navigate(['/colaboraciones']);
      })
  }
}