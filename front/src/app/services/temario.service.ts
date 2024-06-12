
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, of } from 'rxjs';
import { identifierName } from '@angular/compiler';
import { Temario } from '../interface/temario';

@Injectable({
  providedIn: 'root'
})
export class TemarioService {
  baseUrl=environment.baseUrl+environment.urlTemario
  constructor(private http:HttpClient) { }

  getAllTemarios(): Observable<any | undefined>{
    return this.http.get<any>(this.baseUrl+'/').pipe(
      catchError((error)=>{
        return of(undefined)
      })
    )
  }

  getTemarioPorId(id:number): Observable<any | undefined>{
    return this.http.get<any>(this.baseUrl+'/'+id).pipe(
      catchError((error)=>{
        return of(undefined)
      })
    )
  }

  getTemarioDeAsignatura(idAsignatura:number): Observable<any | undefined>{
    return this.http.get<any>(this.baseUrl+'/asignatura/'+idAsignatura).pipe(
      catchError((error)=>{
        return of(undefined)
      })
    )
  }

  insertTemario(temario:Temario): Observable<any | undefined> {
    let body={temario:temario}
     return this.http.post<any>(this.baseUrl,temario,{params: {auth: true}}).pipe(
     
     )
  }

  updateTemario(temario:Temario, id:number):Observable<any|undefined>{
    let body={temario:temario}
    return this.http.put<any>(this.baseUrl+'/'+id,temario,{params: {auth: true}}).pipe(

    )
  }

  deleteTemario(id:number):Observable<any|undefined>{
    return this.http.delete<any>(this.baseUrl+'/'+id,{params: {auth: true}}).pipe(

    )
  }
}
