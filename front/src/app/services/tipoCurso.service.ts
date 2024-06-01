import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { TipoCurso } from '../interface/tipoCurso';

@Injectable({
  providedIn: 'root'
})
export class TipoCursoService {

  baseUrl=environment.baseUrl+environment.urlTipoCurso
  constructor(private http:HttpClient) { }

  getTiposCursos(): Observable<any | undefined> {
    return this.http.get<any>(this.baseUrl).pipe(

      catchError((error) =>{
        return of(undefined)
      })
    )
  }
  getTipoCursoPorId(id:number): Observable<any | undefined> {
    return this.http.get<any>(this.baseUrl+'/'+id).pipe(
      catchError((error) =>{
        return of(undefined)
      })
    )
  }

  insertTipoCurso(tipoCurso:TipoCurso): Observable<any | undefined> {

  
     return this.http.post<any>(this.baseUrl,tipoCurso,{params: {auth: true}}).pipe(
     
     )
   }
   
  deleteTipoCurso(id:number): Observable<any | undefined> {

    return this.http.delete<any>(this.baseUrl+'/'+id,{params: {auth: true}}).pipe(
      catchError((error) =>{
        return of(undefined)
      })
    )
  }
  updateTipoCurso(tipoCurso: TipoCurso): Observable<any | undefined> {
     return this.http.put<any>(this.baseUrl+'/',tipoCurso,{params: {auth: true}}).pipe(
      catchError((error) =>{
        return of(undefined)
      })
     )
   }
}
