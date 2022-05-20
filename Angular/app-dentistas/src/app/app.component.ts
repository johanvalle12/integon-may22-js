import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PersonasService} from './personas.service';
import { Persona } from './shared/interfaces/persona';

@Component({
  selector: 'app-root',
//   template: `
//   <!-- <app-ejemplo></app-ejemplo>
//   <span>{{welcomeMessage}} {{fecha}} {{developer}}</span>
//   <button (click)="demo()">Demo </button> -->
//   <!-- <app-quinto></app-quinto>
//   <app-counter></app-counter>
//   <app-info-persona [nombre] = "'Johan'" [apellido]="'Valle'"></app-info-persona>
//   <app-matematico #appMath1 [numero1]=-10 [numero2]=5 [operador]="'+'" (buttonClicked)="onClick($event)"></app-matematico>
//   <app-matematico #appMath2 [numero1]=34 [numero2]=-54 [operador]="'-'" (buttonClicked)="onClick($event)"></app-matematico> -->
// <!--
//   <p *ngIf="developer=='Johan V'; else noSeCumple"> Se cumplió la condición.</p>
//   <ng-template #noSeCumple>
//     <p>No se cumple la condición</p>
//   </ng-template> -->

//   <!-- <p appCopyright></p> -->

//   <!-- <input type="text" appNumeric>

//   <div *appPermission="['admin', 'agent', 'johan']">
//     <h3>Solo admin, agent y Johan pueden ver esto.</h3>
//   </div> -->

//   <!-- <p *ngIf="developer!='Johan V.'"> No cumplió la condición.</p> -->
//   <!-- <br>
//   <span> {{ appMath1.numero1 }} {{appMath1.operador}} {{appMath1.numero2}} = {{appMath1.resultado}} </span>
//   <br>
//   <span> {{ appMath2.numero1 }} {{appMath2.operador}} {{appMath2.numero2}} = {{appMath2.resultado}} </span>

//   <app-demoutilerias></app-demoutilerias> -->

//   <!-- <router-outlet></router-outlet>

//   <table>
//     <thead>
//       <th>Index</th>
//       <th>Nombre</th>
//       <th>Apellido</th>
//       <th>Ciudad</th>
//       <th>Moneda</th>
//     </thead>
//     <tbody>
//       <tr *ngFor="let persona of personas | sort:'nombre':'asc'; index as myIndex">
//         <td>{{persona.id}}</td>
//         <td>{{persona.nombre | uppercase}}</td>
//         <td>{{persona.apellido | lowercase}}</td>
//         <td>{{persona.ciudad | uppercase | slice:0:3}}</td>
//         <td>{{persona.moneda | currency:'EUR'}}<td>
//       </tr>
//     </tbody>
//   </table>


//   Dato: <input type="text" id="txtDato" [(ngModel)]="dato">
//   {{ dato }}

//   <br><br>
//   `, -->

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [
    PersonasService
  ]
})
export class ComponentOne implements OnInit {
  title = 'app-dentistas';
  welcomeMessage = "Bienvenidos a esta aplicación de dentistas.";
  developer = "Johan V.";
  pipe = new DatePipe('en-US');
  fecha = null;
  dato:string = "";

  //personas : Persona[] = [];
  // public personas = [
  //   {id: 1, nombre: "Johan", apellido:"Valle", ciudad: "Ensenada", moneda:"10000"},
  //   {id: 2, nombre: "Osvaldo", apellido:"Cardenas", ciudad: "Maneadero", moneda:"15000"},
  //   {id: 3, nombre: "Omar", apellido:"Valle", ciudad: "Rosarito", moneda:"12000"}
  // ];

  constructor(private personasService:PersonasService){

  }

  demo():void {
    this.developer="Modificado por el click handler";
  }
  ngOnInit() {
    this.fecha = this.pipe.transform(Date.now(), 'dd/MM/yyyy');
    // this.personasService.getPersonas().subscribe({
    //   next: data => {
    //     console.log(data.personas);
    //     this.personas = data.personas;
    //   }
    // });
    // this.personasService.getPersonas().subscribe(data => {
    //   this.personas = data["personas"];
    // });
  }

  onClick(event){
    console.log(event);
    if(event)
      window.alert('Se presiono el boton');
    else
      window.alert('Se presiono mal el boton');
  }
}
