import { Component, EventEmitter, Input, IterableDiffers, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-matematico',
  templateUrl: './matematico.component.html',
  styleUrls: ['./matematico.component.sass']
})
export class MatematicoComponent implements OnInit {

  @Input() numero1:number;
  @Input() numero2:number;
  @Input() operador:string;

  @Output() buttonClicked = new EventEmitter();

  public resultado:number = 0;
  constructor() { }

  emitirEvento(){
    this.buttonClicked.emit(false);
  }

  realizarOperacion():number{
    switch(this.operador){
      case '+':
        this.resultado = this.numero1 + this.numero2;
        return this.numero1 + this.numero2;
      case '-':
        this.resultado = this.numero1 - this.numero2;
        return this.numero1 - this.numero2;
      case '*':
        this.resultado = this.numero1 * this.numero2;
        return this.numero1 * this.numero2;
      case '/':
        this.resultado = this.numero1 / this.numero2;
        return this.numero1 / this.numero2;
    }
  }
  ngOnInit() : void {

  }

  ngOnChanges(changes){
    const num1 = changes['numero1'];
    const num2 = changes['numero2'];
    //const oldValue = num1.previousValue;
    //const newValue = num1.currentValue;
    // console.log(`Numero1 changed from ${oldValue} to ${newValue}`);

    this.numero1 = (num1.currentValue < 0) ? 0 : num1.currentValue;
    this.numero2 = (num2.currentValue < 0) ? 0 : num2.currentValue;
  }

}
