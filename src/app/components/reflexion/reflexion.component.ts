import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reflexiones } from 'src/app/Models/Reflexiones'; 
import { ReflexionesService } from 'src/app/Services/reflexiones.service';
import { TokenService } from 'src/app/Services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reflexion',
  templateUrl: './reflexion.component.html',
  styleUrls: ['./reflexion.component.css']
})
export class ReflexionComponent implements OnInit {

  public reflexion: Reflexiones;

  roles: string[];
  isAdmin = false;
  
  constructor(
    private reflexionesService: ReflexionesService,
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
    const id = this.activatedRoute.snapshot.params['idReflexion'];
    this.reflexionesService.buscarReflexion(id).subscribe(
      data => {
        this.reflexion = data;
      },
      err => {
        Swal.fire(
          'ERROR!',
          'Ah ocurrido un error al cargar la Reflexion',
          'error'
        )
        this.router.navigate(['/reflexiones']);
      }
    )

      

  }

  borrar(id?: number){
    if(id != undefined)[
      Swal.fire({
        title: 'Quieres eliminar la Reflexion?',
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
          this.reflexionesService.borrarReflecion(id).subscribe(
            data =>{
              this.router.navigate(['/reflexiones']);
            }, err =>{
              Swal.fire(
                'ERROR!',
                'Ah ocurrido un error al borrar la Reflexion',
                'error'
              )
              this.router.navigate(['/reflexiones']);
            }
          )
        }
      }),
    ]
  }

}
