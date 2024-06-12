
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, of } from 'rxjs';
import { identifierName } from '@angular/compiler';
import { Curso } from '../interface/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  baseUrl=environment.baseUrl+environment.urlCurso
  constructor(private http:HttpClient) { }

  getCursos(): Observable<any | undefined>{
    return this.http.get<any>(this.baseUrl+'/').pipe(
      catchError((error)=>{
        return of(undefined)
      })
    )
  }

  getCursoPorId(id:number): Observable<any | undefined>{
    return this.http.get<any>(this.baseUrl+'/'+id).pipe(
      catchError((error)=>{
        return of(undefined)
      })
    )
  }

  insertCurso(curso:Curso): Observable<any | undefined> {
    let body={curso:curso}
     return this.http.post<any>(this.baseUrl,curso,{params: {auth: true}}).pipe(
     
     )
  }

  updateCurso(curso:Curso, id:number):Observable<any|undefined>{
    let body={curso:curso}
    return this.http.put<any>(this.baseUrl+'/'+id,curso,{params: {auth: true}}).pipe(

    )
  }

  deleteCurso(id:number):Observable<any|undefined>{
    return this.http.delete<any>(this.baseUrl+'/'+id,{params: {auth: true}}).pipe(

    )
  }
}