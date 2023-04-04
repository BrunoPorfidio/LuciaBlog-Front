import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Models/Persona';
import { PersonaService } from 'src/app/Services/persona.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css'],
})
export class SobreMiComponent implements OnInit {
  persona: Persona[] = [];

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {

    this.mostrarPersona();

  }

  private mostrarPersona() {
    this.personaService.verPersona().subscribe(
      (data) => {
        this.persona = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
