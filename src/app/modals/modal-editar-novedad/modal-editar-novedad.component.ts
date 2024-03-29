import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Novedades } from 'src/app/Models/Novedades';
import { NovedadesService } from 'src/app/Services/novedades.service';
import { TokenService } from 'src/app/Services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-editar-novedad',
  templateUrl: './modal-editar-novedad.component.html',
  styleUrls: ['./modal-editar-novedad.component.css'],
})
export class ModalEditarNovedadComponent implements OnInit {
  public novedades: Novedades;

  roles: string[];
  isAdmin = false;

  public imagenes: any = [];
  public previsualizacion: string;
  public imagenBase64: String;

  constructor(
    private novedadesService: NovedadesService,
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

    const id = this.activatedRoute.snapshot.params['idNovedad'];
    this.novedadesService.buscarNovedades(id).subscribe(
      (data) => {
        this.novedades = data;
        this.previsualizacion = this.novedades.fotoLibro;
      },
      (err) => {
        alert('Error al cargar la Novedad');
        this.router.navigate(['/luciBlog']);
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
    const id = this.activatedRoute.snapshot.params['idNovedad'];
    this.novedadesService.editarNovedad(id, this.novedades).subscribe(
      (data) => {
        Swal.fire('Novedad Editada!', 
        'Se ha editado con exito', 
        'success');
        this.router.navigate(['/novedad/' + id]);
      },
      (err) => {
        Swal.fire(
          'ERROR!',
          'Ah ocurrido un error al editar la Novedad',
          'error'
        );
        this.router.navigate(['/luciBlog']);
      }
    );
  }
}
