import { Component, OnInit } from '@angular/core';
import { Vuelo } from '../../shared/interfaces/vuelo';
import { VuelosService } from '../vuelos.service';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.sass']
})
export class VuelosComponent implements OnInit {

  vuelos:Vuelo[] = [];
  numeroVuelo:string = "";
  fecha:string = "";
  horario:string = "";
  origen:string = "";
  destino:string = "";
  constructor(private vuelosService:VuelosService) { }

  ngOnInit(): void {
    this.vuelosService.getVuelos().subscribe(data => this.vuelos = data["vuelos"]);
  }

  ngOnChanges(changes){
    this.vuelosService.getVuelos().subscribe(data => this.vuelos = data["vuelos"]);
  }

  agregarVuelo() {
    if(this.numeroVuelo == "" || this.fecha == "" || this.horario == "" || this.origen == "" || this.destino == "")
      return alert("Faltan campos por llenar para agregar el vuelo.");
    let vuelo:Vuelo = {
      numeroVuelo : this.numeroVuelo,
      fecha : this.fecha,
      horario : this.horario,
      origen : this.origen,
      destino : this.destino
    };
    //this.vuelosService.agregarVuelo(vuelo);
    this.vuelosService.agregarVuelo(vuelo).subscribe(vuelo => {
      //console.log(vuelo);
      //this.vuelos.push(vuelo)
      this.vuelosService.getVuelos().subscribe(data => this.vuelos = data["vuelos"]);
    });
    this.numeroVuelo = "";
    this.fecha = "";
    this.horario = "";
    this.origen = "";
    this.destino = "";
  }
}
