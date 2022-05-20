import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vuelo } from '../shared/interfaces/vuelo';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  private vuelos : Vuelo[] = [
    {numeroVuelo: "123", fecha: "10/05/2022", horario:"17:00", origen: "Tijuana", destino:"Merida"},
    {numeroVuelo: "456", fecha: "12/05/2022", horario:"06:00", origen: "CDMX", destino:"Tijuana"}
  ];
  constructor(private http:HttpClient) { }

  // getVuelos():Vuelo[]{
  //   return this.vuelos;
  // }

  getVuelos(): Observable<Vuelo[]> {
    return this.http.get<Vuelo[]>('http://localhost:3005/vuelos');
  }

  agregarVuelo(vuelo:Vuelo) : Observable<Vuelo>{
    //this.vuelos.push(vuelo);
   return this.http.post<Vuelo>("http://localhost:3005/vuelos", vuelo);
  }
}
