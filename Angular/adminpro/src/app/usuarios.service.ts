import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Usuario } from './shared/interfaces/usuario';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuarios:Usuario[] = [];
  constructor(private http:HttpClient) { }

  getusuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:3005/users-adminpro').pipe(
      catchError((error:HttpErrorResponse) => {
        console.log(`Ocurrio un error ${error}`);
        return throwError(error);
      })
    );
  }

  getUsuario(usuario:Usuario): Observable<Boolean> {
    return this.http.get<Boolean>('http://localhost:3005/users-adminpro/'+usuario.email+'/'+usuario.password).pipe(
      catchError((error:HttpErrorResponse) => {
        console.log(`Ocurrio un error ${error}`);
        return throwError(error);
      })
    );
  }

  agregarUsuario(usuario:Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>("http://localhost:3005/users-adminpro", usuario);
  }
}
