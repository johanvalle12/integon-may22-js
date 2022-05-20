import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-persona',
  templateUrl: './info-persona.component.html',
  styleUrls: ['./info-persona.component.sass']
})
export class InfoPersonaComponent implements OnInit, OnDestroy {

  @Input() nombre:string = "";
  @Input() apellido:string = "Valle";

  clavePersona: number = 0;
  otroParametros: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Se inicializo el componente InfoPersona");
    this.route.params.subscribe( params => {
      this.clavePersona = params.id;
      this.otroParametros = params['param2'];
    });
  }

  ngOnChanges(changes){
    console.log("Se modifico el componente InfoPersona");
  }

  ngOnDestroy() : void {
    console.log("Se destruyo el componente InfoPersona");
  }

}
