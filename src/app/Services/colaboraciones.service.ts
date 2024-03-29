import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Colaboraciones } from '../Models/Colaboraciones';
import { environments } from '../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root',
})
export class ColaboracionesService {
  private ApiColaboraciones = `${environments.Api}/colaboracion/`;

  constructor(private http: HttpClient) {}

  public verColaboraciones(): Observable<Colaboraciones[]> {
    return this.http.get<Colaboraciones[]>(this.ApiColaboraciones + 'ver');
  }

  public verUltimo(){
    return this.http.get<Colaboraciones>(this.ApiColaboraciones + 'ultimo');
  }

  public buscarColaboracion(id: number){
    return this.http.get<Colaboraciones>(`${this.ApiColaboraciones}${id}`);
  }

  public crearColaboracion(colaboraciones: Colaboraciones){
    return this.http.post<Colaboraciones>(`${this.ApiColaboraciones}nuevo`, colaboraciones, httpOptions);
  }
  
  public editarColaboracion(id: number, colaboraciones: Colaboraciones):Observable<any> {
    return this.http.put<any>(`${this.ApiColaboraciones}editar/${id}`, colaboraciones, httpOptions);
  }
  
  public borrarColaboracion(id: number): Observable<any> {
    return this.http.delete<Colaboraciones>(`${this.ApiColaboraciones}borrar/${id}`, httpOptions);
  }
}