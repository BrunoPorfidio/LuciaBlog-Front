import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Novedades } from 'src/app/Models/Novedades'; 
import { NovedadesService } from 'src/app/Services/novedades.service';
import { TokenService } from 'src/app/Services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-novedad',
  templateUrl: './novedad.component.html',
  styleUrls: ['./novedad.component.css']
})
export class NovedadComponent implements OnInit{

  public novedades: Novedades;

  roles: string[];
  isAdmin = false;

  constructor(
    private novedadesService: NovedadesService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService
  ){}

  ngOnInit(): void {
      this.roles = this.tokenService.getAuthorities();
      this.roles.forEach((rol)=> {
        if(rol === 'ROLE_ADMIN'){
        this.isAdmin = true;
        }
      })
      const id= this.activateRoute.snapshot.params['idNovedad'];
      this.novedadesService.buscarNovedades(id).subscribe(
        data => {
          this.novedades = data;
        },
        err => {
          Swal.fire(
            'ERROR',
            'Ah ocurrido un error al cargar la Novedad',
            'error'
          )
          this.router.navigate(['/novedades']);
        }
      )
  }

  borrar(id?: number){
    if(id != undefined)[
      Swal.fire({
        title: 'Quieres eliminar la Reseña?',
        text: "No podras arrepentirte luego!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borralo!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Borrado!',
            'La reseña ah sido borrada.',
            'success'
          )
          this.novedadesService.borrarNovedad(id).subscribe(
            data =>{
              this.router.navigate(['/luciBlog']);
            }, err =>{
              Swal.fire(
                'ERROR',
                'Ah ocurrido un error al borrar la Novedad',
                'error'
              )
              this.router.navigate(['/luciBlog']);
            }
          )
        }
      }),
    ]
  }

}
