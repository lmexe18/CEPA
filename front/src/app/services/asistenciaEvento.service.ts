import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Asistencia } from '../interface/asistencia';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  baseUrl = environment.baseUrl + environment.urlAsistenciaEvento;

  constructor(private http: HttpClient) { }

  // Obtener todas las asistencias de eventos
  getAsistencias(): Observable<any | undefined> {
    return this.http.get<any>(this.baseUrl).pipe(
      catchError((error) => {
        return of(error);
      })
    );
  }

  // Obtener asistencia por ID
  getAsistenciaById(id: number): Observable<any | undefined> {
    return this.http.get<any>(`${this.baseUrl}/${id}`).pipe(
      catchError((error) => {
        return of(error);
      })
    );
  }

  // Obtener asistencias de un usuario
  getAsistenciasUsuario(usuarioId: number): Observable<any | undefined> {
    return this.http.get<any>(`${this.baseUrl}/usuario/${usuarioId}`, { params: { auth: true } }).pipe(
      catchError((error) => {
        return of(error);
      })
    );
  }

  // Obtener usuarios de un evento
  getUsuariosEvento(eventoId: number): Observable<any | undefined> {
    return this.http.get<any>(`${this.baseUrl}/evento/${eventoId}`).pipe(
      catchError((error) => {
        return of(error);
      })
    );
  }

  // Obtener asistencia de un usuario en un evento específico
  getAsistenciaEventoUsuario(eventoId: number, usuarioId: number): Observable<any | undefined> {
    return this.http.get<any>(`${this.baseUrl}/evento/${eventoId}/usuario/${usuarioId}`).pipe(
      catchError((error) => {
        return of(error);
      })
    );
  }

  // Insertar una nueva asistencia
  insertAsistencia(asistencia: any): Observable<any | undefined> {
    return this.http.post<any>(this.baseUrl, asistencia, { params: { auth: true } }).pipe(
      catchError((error) => {
        return of(error);
      })
    );
  }

  // Borrar asistencia por ID
  deleteAsistencia(id: number): Observable<any | undefined> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`, { params: { auth: true } }).pipe(
      catchError((error) => {
        return of(error);
      })
    );
  }
}
