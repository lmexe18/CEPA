
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, of } from 'rxjs';
import { Asignatura } from '../interface/asignatura';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  baseUrl=environment.baseUrl+environment.urlAsignatura
  constructor(private http:HttpClient) { }

  getAllAsignaturas(): Observable<any | undefined>{
    return this.http.get<any>(this.baseUrl+'').pipe(
      catchError((error)=>{
        return of(undefined)
      })
    )
  }

  getAsignaturaPorId(id:number): Observable<any | undefined>{
    return this.http.get<any>(this.baseUrl+'/'+id).pipe(
      catchError((error)=>{
        return of(undefined)
      })
    )
  }

  getAsignaturasDeCurso(cursoId:number): Observable<any | undefined>{
    return this.http.get<any>(this.baseUrl+'/curso/'+cursoId).pipe(
      catchError((error)=>{
        return of(undefined)
      })
    )
  }

  insertAsignatura(asignatura: Asignatura): Observable<any | undefined> {
   
     return this.http.post<any>(this.baseUrl,asignatura,{params: {auth: true}}).pipe(
     
     )
  }

  updateAsignatura(asignatura:Asignatura, id:number):Observable<any|undefined>{

    return this.http.put<any>(this.baseUrl+'/'+id,asignatura,{params: {auth: true}}).pipe(

    )
  }

  deleteAsignatura(id:number):Observable<any|undefined>{
    return this.http.delete<any>(this.baseUrl+'/'+id,{params: {auth: true}}).pipe(

    )
  }

}
