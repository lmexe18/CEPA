import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { AlumnoCurso } from '../interface/alumnoCurso';

@Injectable({
  providedIn: 'root'
})
export class AlumnoCursoService {

  baseUrl = environment.baseUrl + environment.urlAlumnoCurso;

  constructor(private http: HttpClient) { }

  // Obtener todos los alumnos y cursos
  getAlumnosCursos(): Observable<any | undefined> {
    return this.http.get<any>(this.baseUrl).pipe(
      catchError((error) => {
        return of(error);
      })
    );
  }

  // Obtener alumno curso por ID
  getAlumnoCursoById(id: number): Observable<any | undefined> {
    return this.http.get<any>(`${this.baseUrl}/${id}`).pipe(
      catchError((error) => {
        return of(error);
      })
    );
  }

  // Obtener alumnos de un curso
  getAlumnosDeCurso(cursoId: number): Observable<any | undefined> {
    return this.http.get<any>(`${this.baseUrl}/alumnoscursos/${cursoId}`, { params: { auth: true } }).pipe(
      catchError((error) => {
        return of(error);
      })
    );
  }

  // Obtener cursos de un alumno
  getCursosDeAlumno(usuarioId: number): Observable<any | undefined> {
    return this.http.get<any>(`${this.baseUrl}/cursosalumnos/${usuarioId}`).pipe(
      catchError((error) => {
        return of(error);
      })
    );
  }

  // Insertar un nuevo alumno curso
  insertAlumnoCurso(alumnoCurso: any): Observable<any | undefined> {
    return this.http.post<any>(this.baseUrl, alumnoCurso, { params: { auth: true } }).pipe(
      catchError((error) => {
        return of(error);
      })
    );
  }

  // Borrar alumno curso por ID
  deleteAlumnoCurso(id: number): Observable<any | undefined> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`, { params: { auth: true } }).pipe(
      catchError((error) => {
        return of(error);
      })
    );
  }
}
