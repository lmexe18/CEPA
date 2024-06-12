
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, of } from 'rxjs';
import { identifierName } from '@angular/compiler';
import { Departamento } from '../interface/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  baseUrl=environment.baseUrl+environment.urlDepartamento
  constructor(private http:HttpClient) { }

  getDepartamentos(): Observable<any | undefined>{
    return this.http.get<any>(this.baseUrl+'/').pipe(
      catchError((error)=>{
        return of(undefined)
      })
    )
  }

  getDepartamentoPorId(id:number): Observable<any | undefined>{
    return this.http.get<any>(this.baseUrl+'/'+id).pipe(
      catchError((error)=>{
        return of(undefined)
      })
    )
  }

  insertDepartamento(departamento: Departamento): Observable<any | undefined> {
    let body={evento:departamento}
     return this.http.post<any>(this.baseUrl,departamento,{params: {auth: true}}).pipe(
     
     )
  }

  updateDepartamento(departamento: Departamento, id:number):Observable<any|undefined>{
    let body={departamento:departamento}
    return this.http.put<any>(this.baseUrl+'/'+id,departamento,{params: {auth: true}}).pipe(

    )
  }

  deleteDepartamento(id:number):Observable<any|undefined>{
    return this.http.delete<any>(this.baseUrl+'/'+id,{params: {auth: true}}).pipe(

    )
  }
}
