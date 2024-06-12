
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, of } from 'rxjs';
import { identifierName } from '@angular/compiler';
import { DocumentoProgramatico } from '../interface/documentoProgramatico';

@Injectable({
  providedIn: 'root'
})
export class DocumentoProgramaticoService {
  baseUrl=environment.baseUrl+environment.urlDocumentoProgramatico
  constructor(private http:HttpClient) { }

  getAllDocumentosProgramaticos(): Observable<any | undefined>{
    return this.http.get<any>(this.baseUrl+'/').pipe(
      catchError((error)=>{
        return of(undefined)
      })
    )
  }

  getDocumentoPorId(id:number): Observable<any | undefined>{
    return this.http.get<any>(this.baseUrl+'/'+id).pipe(
      catchError((error)=>{
        return of(undefined)
      })
    )
  }

  insertDocumento(documento: DocumentoProgramatico): Observable<any | undefined> {
    let body={documento:documento}
     return this.http.post<any>(this.baseUrl,documento,{params: {auth: true}}).pipe(
     
     )
  }

  updateDocumento(documento:DocumentoProgramatico, id:number):Observable<any|undefined>{
    let body={documento:documento}
    return this.http.put<any>(this.baseUrl+'/'+id,documento,{params: {auth: true}}).pipe(

    )
  }

  deleteDocumento(id:number):Observable<any|undefined>{
    return this.http.delete<any>(this.baseUrl+'/'+id,{params: {auth: true}}).pipe(

    )
  }
}
