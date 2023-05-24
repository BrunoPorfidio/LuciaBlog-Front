import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaboraciones } from 'src/app/Models/Colaboraciones';
import { ColaboracionesService } from 'src/app/Services/colaboraciones.service';
import { TokenService } from 'src/app/Services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-colaboracion',
  templateUrl: './colaboracion.component.html',
  styleUrls: ['./colaboracion.component.css']
})
export class ColaboracionComponent implements OnInit{

  public colaboracion: Colaboraciones;

  roles: string[];
  isAdmin = false;
  
  constructor(
    private colaboracionesService: ColaboracionesService,
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
        this.colaboracion = data;
      },
      err => {
        Swal.fire(
          'ERROR!',
          'Ah ocurrido un error al cargar la Colaboracion',
          'error'
        )
        this.router.navigate(['/colaboraciones']);
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
          this.colaboracionesService.borrarColaboracion(id).subscribe(
            data =>{
              this.router.navigate(['/colaboraciones']);
            }, err =>{
              Swal.fire(
                'ERROR!',
                'Ah ocurrido un error al borrar la Reseña',
                'error'
              )
              this.router.navigate(['/colaboraciones']);
            }
          )
        }
      }),
    ]
  }

}
