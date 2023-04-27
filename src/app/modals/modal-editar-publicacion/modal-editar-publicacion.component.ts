import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Persona } from 'src/app/Models/Persona';
import { PersonaService } from 'src/app/Services/persona.service';

@Component({
  selector: 'app-modal-editar-publicacion',
  templateUrl: './modal-editar-publicacion.component.html',
  styleUrls: ['./modal-editar-publicacion.component.css']
})
export class ModalEditarPublicacionComponent implements OnInit{
  persona: Persona[] = [];

  public imagenes: any = [];
  public previsualizacion: string;

  constructor(
    private personaService: PersonaService,
    private sanitizer: DomSanitizer
    ) {}

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

  capturarImagen(event: any){
    const imagenCapturada = event.target.files[0];
    this.extraerBase64(imagenCapturada).then((imagen: any) => {
      this.previsualizacion = imagen.base;
    });
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try{
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
    } catch(e){
    }
  })
}