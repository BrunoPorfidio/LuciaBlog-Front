import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Publicacion } from '../Models/Publicacion';
import { environments } from '../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root',
})
export class PublicacionService {
  private ApiPublicacion = `${environments.Api}/publicacion/`;

  constructor(private http: HttpClient) {}

  public verPublicacion(): Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(this.ApiPublicacion + 'ver');
  }

  public verUltimo(){
    return this.http.get<Publicacion>(this.ApiPublicacion + 'ultimo');
  }

  public buscarPublicacion(id: number){
    return this.http.get<Publicacion>(`${this.ApiPublicacion}${id}`);
  }

  public crearPublicacion(publicacion: Publicacion){
    return this.http.post<Publicacion>(`${this.ApiPublicacion}nuevo`, publicacion, httpOptions);
  }
  
  public editarPublicacion(id: number, publicacion: Publicacion):Observable<any> {
    return this.http.put<any>(`${this.ApiPublicacion}editar/${id}`, publicacion, httpOptions);
  }
  
  public borrarPublicacion(id: number): Observable<any> {
    return this.http.delete<Publicacion>(`${this.ApiPublicacion}borrar/${id}`, httpOptions);
  }
}