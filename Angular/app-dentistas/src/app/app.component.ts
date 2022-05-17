import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class ComponentOne {
  title = 'app-dentistas';
  welcomeMessage = "Bienvenidos a esta aplicación de dentistas.";
  developer = "Johan V.";
  pipe = new DatePipe('en-US');
  fecha = null;
  ngOnInit() : void {
    this.fecha = this.pipe.transform(Date.now(), 'dd/MM/yyyy');
  }
}
