
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, of } from 'rxjs';
import { identifierName } from '@angular/compiler';
import { EquipoDirectivo } from '../interface/equipoDirectivo';

@Injectable({
  providedIn: 'root'
})
export class EquipoDirectivoService {
  baseUrl=environment.baseUrl+environment.urlEquipoDirectivo
  constructor(private http:HttpClient) { }

  getEquiposDirectivos(): Observable<any | undefined>{
    return this.http.get<any>(this.baseUrl+'/').pipe(
      catchError((error)=>{
        return of(undefined)
      })
    )
  }

  getEquipoDirectivoPorId(id:number): Observable<any | undefined>{
    return this.http.get<any>(this.baseUrl+'/'+id).pipe(
      catchError((error)=>{
        return of(undefined)
      })
    )
  }

  insertEquipoDirectivo(equipoDirectivo: EquipoDirectivo): Observable<any | undefined> {
    let body={equipoDirectivo:equipoDirectivo}
     return this.http.post<any>(this.baseUrl,equipoDirectivo,{params: {auth: true}}).pipe(
     
     )
  }

  updateEquipoDirectivo(equipoDirectivo:EquipoDirectivo, id:number):Observable<any|undefined>{
    let body={equipoDirectivo:equipoDirectivo}
    return this.http.put<any>(this.baseUrl+'/'+id,equipoDirectivo,{params: {auth: true}}).pipe(

    )
  }

  deleteEquipoDirectivo(id:number):Observable<any|undefined>{
    return this.http.delete<any>(this.baseUrl+'/'+id,{params: {auth: true}}).pipe(

    )
  }
}
