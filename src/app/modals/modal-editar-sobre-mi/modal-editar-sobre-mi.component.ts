import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/Models/Persona';
import { PersonaService } from 'src/app/Services/persona.service';
import { TokenService } from 'src/app/Services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-editar-sobre-mi',
  templateUrl: './modal-editar-sobre-mi.component.html',
  styleUrls: ['./modal-editar-sobre-mi.component.css']
})
export class ModalEditarSobreMiComponent implements OnInit{

  public persona: Persona;

  roles: string[];
  isAdmin = false;

  constructor(
    private personaService: PersonaService,
    private router: Router,
    private tokenService: TokenService,
    private activatedRoute: ActivatedRoute,

  ){}

  ngOnInit(): void {
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol)=> {
      if (rol === 'ROLE_ADMIN'){
        this.isAdmin = true;
      }
    })

    const id = this.activatedRoute.snapshot.params['id'];
  this.personaService.buscarPersona(id).subscribe(
    data => {
      this.persona = data;
    },
     err => {
      alert("Error al cargar la Reseña");
      this.router.navigate(['/luciBlog']);
    }
    )
  }

  editar(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.editarPersona(id, this.persona).subscribe(
      data => {
        Swal.fire(
          'Reseña Editada!',
          'Se ha editado con exito',
          'success'
        )
        this.router.navigate(['/luciBlog'])
      }, err => {
        Swal.fire(
          'ERROR!',
          'Ah ocurrido un error al editar la Reseña',
          'error'
        )
        this.router.navigate(['/luciBlog']);
      })
  }

}
