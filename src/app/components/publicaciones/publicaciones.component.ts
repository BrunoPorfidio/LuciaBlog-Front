import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Publicacion } from 'src/app/Models/Publicacion'; 
import { PublicacionService } from 'src/app/Services/publicacion.service';


@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css'],
})
export class PublicacionesComponent implements OnInit {

  public publicacion: Publicacion[] = [];

  public publicacionimg: any;

  base: string="";

  constructor(
    private publicacionService: PublicacionService,
    private sanitizer: DomSanitizer) {}
    


  ngOnInit(): void {
    this.mostrarPublicaciones();
  }


  handleFileInput(files: FileList) {
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      if (reader.result) {
      this.publicacionimg = reader.result.toString();
      }
    };
  this.publicacionimg = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXFxgXGBgVGBgWGBgYGBgXGBYXGBgYHSggGBolGxYVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH...');

  }


  obtener(e:any){
    this.base=e[0].base64;
  }

  private mostrarPublicaciones() {
    this.publicacionService.verPublicacion().subscribe(
      (data) => {
        this.publicacion = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
