import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-info-persona',
  templateUrl: './info-persona.component.html',
  styleUrls: ['./info-persona.component.sass']
})
export class InfoPersonaComponent implements OnInit, OnDestroy {

  @Input() nombre:string = "";
  @Input() apellido:string = "Valle";

  constructor() { }

  ngOnInit(): void {
    console.log("Se inicializo el componente InfoPersona");
  }

  ngOnChanges(changes){
    console.log("Se modifico el componente InfoPersona");
  }

  ngOnDestroy() : void {
    console.log("Se destruyo el componente InfoPersona");
  }

}
