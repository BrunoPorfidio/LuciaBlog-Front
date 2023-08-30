import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Reflexiones } from 'src/app/Models/Reflexiones';
import { ReflexionesService } from 'src/app/Services/reflexiones.service';
import { TokenService } from 'src/app/Services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-editar-reflexion',
  templateUrl: './modal-editar-reflexion.component.html',
  styleUrls: ['./modal-editar-reflexion.component.css']
})
export class ModalEditarReflexionComponent implements OnInit {
  
  public reflexiones: Reflexiones;

  roles: string[];
  isAdmin = false;

  public imagenes: any = [];
  public previsualizacion: string;
  public imagenBase64: String;

  constructor(
    private reflexionesService: ReflexionesService,
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });

    const id = this.activatedRoute.snapshot.params['idReflexion'];
    this.reflexionesService.buscarReflexion(id).subscribe(
      (data) => {
        this.reflexiones = data;
        this.previsualizacion = this.reflexiones.fotoReflexion;
      },
      (err) => {
        alert('Error al cargar la Reflexion');
        this.router.navigate(['/reflexiones']);
      }
    );
  }

  cargarImagenDesdeURL(event: ClipboardEvent) {
    const pastedText = event.clipboardData?.getData('text');
    if (pastedText) {
      this.previsualizacion = pastedText;
    }
  }

  editar(): void {
    const id = this.activatedRoute.snapshot.params['idReflexion'];
    this.reflexionesService.editarReflexion(id, this.reflexiones).subscribe(
      (data) => {
        Swal.fire('Reflexion Editada!', 
        'Se ha editado con exito', 
        'success');
        this.router.navigate(['/reflexion/' + id]);
      },
      (err) => {
        Swal.fire(
          'ERROR!',
          'Ah ocurrido un error al editar la Reflexion',
          'error'
        );
        this.router.navigate(['/reflexiones']);
      }
    );
  }
}
