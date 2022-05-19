import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent implements OnInit {
  contador : number = 0;
  constructor() { }

  masUno():void{
    this.contador++;
  }
  menosUno():void{
    this.contador--;
  }
  ngOnInit(): void {
  }

}
