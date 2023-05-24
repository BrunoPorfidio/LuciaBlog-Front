import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Novedades } from '../Models/Novedades';
import { environments } from '../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root',
})
export class NovedadesService {
  private ApiNovedades = `${environments.Api}/novedades/`;

  constructor(private http: HttpClient) {}

  public verNovedades(): Observable<Novedades[]> {
    return this.http.get<Novedades[]>(this.ApiNovedades + 'ver');
  }

  public buscarNovedades(id: number){
    return this.http.get<Novedades>(`${this.ApiNovedades}${id}`);
  }

  public crearNovedad(novedades: Novedades){
    return this.http.post<Novedades>(`${this.ApiNovedades}nuevo`, novedades, httpOptions);
  }
  
  public editarNovedad(id: number, novedades: Novedades):Observable<any> {
    return this.http.put<any>(`${this.ApiNovedades}editar/${id}`, novedades, httpOptions);
  }
  
  public borrarNovedad(id: number): Observable<any> {
    return this.http.delete<Novedades>(`${this.ApiNovedades}borrar/${id}`, httpOptions);
  }
}