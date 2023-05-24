import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicacion } from 'src/app/Models/Publicacion'; 
import { PublicacionService } from 'src/app/Services/publicacion.service';
import { TokenService } from 'src/app/Services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  public publicacion: Publicacion;

  roles: string[];
  isAdmin = false;
  
  constructor(
    private publicacionService: PublicacionService,
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
      },
      err => {
        Swal.fire(
          'ERROR!',
          'Ah ocurrido un error al cargar la Reseña',
          'error'
        )
        this.router.navigate(['/publicaciones']);
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
          this.publicacionService.borrarPublicacion(id).subscribe(
            data =>{
              this.router.navigate(['/publicaciones']);
            }, err =>{
              Swal.fire(
                'ERROR!',
                'Ah ocurrido un error al borrar la Reseña',
                'error'
              )
              this.router.navigate(['/publicaciones']);
            }
          )
        }
      }),
    ]
  }

}
