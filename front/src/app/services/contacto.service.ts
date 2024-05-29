import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, of } from 'rxjs';
import { Contacto } from '../interface/contacto';

@Injectable({
  providedIn: 'root'
})

export class ContactoService {
  baseUrl=environment.baseUrl+environment.urlContacto
  constructor(private http:HttpClient) { }

  getContactos(): Observable<any | undefined> {
    return this.http.get<any>(this.baseUrl+'/').pipe(

      catchError((error) =>{
        return of(undefined)
      })
    )
  }
  getContactoPorId(id:number): Observable<any | undefined> {
    return this.http.get<any>(this.baseUrl+'/'+id).pipe(
      catchError((error) =>{
        return of(undefined)
      })
    )
  }
  insertContacto(contacto:Contacto): Observable<any | undefined> {
    let body={contacto:contacto}
  
     return this.http.post<any>(this.baseUrl+'/',contacto,{params: {auth: true}})
   }
   
  deleteContacto(id:number): Observable<any | undefined> {

    return this.http.delete<any>(this.baseUrl+'/'+id,{params: {auth: true}}).pipe(
      catchError((error) =>{
        return of(undefined)
      })
    )
  }
  updateContacto(contacto:Contacto): Observable<any | undefined> {
     return this.http.put<any>(this.baseUrl+'/'+contacto.id,contacto,{params: {auth: true}}).pipe(
      catchError((error) =>{
        return of(undefined)
      })
     )
   }
}
