import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Persona } from '../Models/Persona';
import { environments } from '../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private ApiPersona = `${environments.Api}/persona/`;

  constructor(private http: HttpClient) {}

  public verPersona(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.ApiPersona + 'ver');
  }

  public buscarPersona(id: number){
    return this.http.get<Persona>(`${this.ApiPersona}${id}`);
  }

  public crearPersona(persona: Persona){
    return this.http.post<Persona>(`${this.ApiPersona}nuevo`, persona, httpOptions);
  }
  
  public editarPersona(id: number, persona: Persona):Observable<any> {
    return this.http.put<any>(`${this.ApiPersona}editar/${id}`, persona, httpOptions);
  }
  
  public borrarPersona(persona: Persona) {
    return this.http.delete<Persona>(`${this.ApiPersona}borrar/`+ persona.id);
  }
}