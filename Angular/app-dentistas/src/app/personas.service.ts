import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Persona } from './shared/interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private personas:Persona[] = [];

  constructor(private http: HttpClient) {

  }

  // getPersonas() : any {

  //   const request$ = new Observable(observer => {
  //     const url = "http://localhost:3005/personas";
  //     const request = new XMLHttpRequest();
  //     request.addEventListener("load", () => {
  //       if (request.readyState === 4 && request.status === 200) {
  //         observer.next(JSON.parse(request.responseText));
  //         observer.complete();
  //       } else {
  //         observer.error('An error has occured');
  //       }
  //     });
  //     request.open("GET", url);
  //     request.send();
  //   });

  //   //request$.toPromise().then((data) => console.log(data));


  //   // let personas : Persona[] = [
  //   //   {id: 1, nombre: "Johan", apellido:"Valle", ciudad: "Ensenada", moneda:10000},
  //   //   {id: 2, nombre: "Osvaldo", apellido:"Cardenas", ciudad: "Maneadero", moneda:15000},
  //   //   {id: 3, nombre: "Omar", apellido:"Valle", ciudad: "Rosarito", moneda:12000},
  //   //   {id: 4, nombre: "Eduardo", apellido:"Prieto", ciudad: "Ensenada", moneda:8000},
  //   //   {id: 5, nombre: "Ashley", apellido:"Cardenas", ciudad: "Maneadero", moneda:20000}
  //   // ];

  //   return request$;
  // }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>('http://localhost:3005/personas').pipe(
      catchError((error:HttpErrorResponse) => {
        console.log(`Ocurrio un error ${error}`);
        return throwError(error);
      })
    );
  }
}
