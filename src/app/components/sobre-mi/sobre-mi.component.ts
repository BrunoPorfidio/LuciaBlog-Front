import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/Models/Persona';
import { PersonaService } from 'src/app/Services/persona.service';
import { TokenService } from 'src/app/Services/token.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css'],
})
export class SobreMiComponent implements OnInit {
  persona: Persona;

  roles: string[];
  isAdmin = false;

  constructor(
    private personaService: PersonaService,
    private tokenService: TokenService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit(): void {

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol)=> {
      if (rol === 'ROLE_ADMIN'){
        this.isAdmin = true;
      }
    })
    const id = 1;
    this.personaService.buscarPersona(id).subscribe(
      data => {
        this.persona = data;
      },
      err => {
        Swal.fire(
          'ERROR!',
          'Ah ocurrido un error al cargar los Datos Personales',
          'error'
        )
        this.router.navigate(['/publicaciones']);
      }
    )

  }
}
