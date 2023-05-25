import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Reflexiones } from '../Models/Reflexiones';
import { environments } from '../environments/environment.prod';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
}

@Injectable({
    providedIn: 'root',
})
export class ReflexionesService {
    private ApiReflexiones = `${environments.Api}/reflexiones/`;

    constructor(private http: HttpClient){}

    public verReflexion(): Observable<Reflexiones[]>{
        return this.http.get<Reflexiones[]>(this.ApiReflexiones + 'ver');
    }

    public buscarReflexion(id: number){
        return this.http.get<Reflexiones>(`${this.ApiReflexiones}${id}`);
    }

    public crearReflexion(reflexiones: Reflexiones){
        return this.http.post<Reflexiones>(`${this.ApiReflexiones}nuevo`, reflexiones, httpOptions);
    }

    public editarReflexion(id: number, reflexiones: Reflexiones):Observable<any> {
        return this.http.put<any>(`${this.ApiReflexiones}editar/${id}`, reflexiones, httpOptions);
      }
      
    public borrarReflecion(id: number): Observable<any> {
        return this.http.delete<Reflexiones>(`${this.ApiReflexiones}borrar/${id}`, httpOptions);
      }

}