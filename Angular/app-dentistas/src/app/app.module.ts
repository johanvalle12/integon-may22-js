import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentOne } from './app.component';
import { Ejemplo } from './app.ejemplo';
import { Tercero } from './app.tercero';
import { Cuarto } from './app.tercero';
import { QuintoComponent } from './quinto/quinto.component';
import { CounterComponent } from './counter/counter.component';
import { InfoPersonaComponent } from './info-persona/info-persona.component';
import { MatematicoComponent } from './matematico/matematico.component';
import { SortPipe } from './sort.pipe';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { PermissionDirective } from './permission.directive';

@NgModule({
  declarations: [
    ComponentOne,
    Ejemplo,
    Tercero,
    QuintoComponent,
    Cuarto,
    CounterComponent,
    InfoPersonaComponent,
    MatematicoComponent,
    SortPipe,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ComponentOne]
})
export class AppModule { }
