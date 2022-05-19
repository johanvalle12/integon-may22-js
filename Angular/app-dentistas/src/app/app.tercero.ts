import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-tercero',
  template: `<h1>Este es el componente tercero {{texto}}</h1>`
})
export class Tercero {
  texto = "Johan el mejor x2";
}

@Component({
  selector: 'app-cuarto',
  template: `<h1>Este es el componente cuarto {{texto}}</h1>`
})
export class Cuarto implements OnInit{
  texto = "Johan el mejor x3";

  ngOnInit() : void {

  }
}
