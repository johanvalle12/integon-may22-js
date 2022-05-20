import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { UtileriasModule } from './utilerias/utilerias.module';
import { SharedModule } from './shared/shared.module';
import { AerolineaModule } from './vuelos/aerolinea.module';


import { ComponentOne } from './app.component';
import { Ejemplo } from './app.ejemplo';
import { Tercero } from './app.tercero';
import { Cuarto } from './app.tercero';
import { QuintoComponent } from './quinto/quinto.component';
import { CounterComponent } from './counter/counter.component';
import { InfoPersonaComponent } from './info-persona/info-persona.component';
import { MatematicoComponent } from './matematico/matematico.component';

import { RouterModule, Routes } from '@angular/router';
import { DemoutileriasComponent } from './utilerias/demoutilerias/demoutilerias.component';
import { VuelosComponent } from './vuelos/vuelos/vuelos.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
  { path: 'demoutilerias', component: DemoutileriasComponent },
  { path: 'vuelos', component: VuelosComponent},
  { path: 'personas', component: PersonasComponent },
  { path: 'personas/info-persona/:id', component: InfoPersonaComponent },
  { path: 'personas/info-persona/:id/:param2', component: InfoPersonaComponent },
  { path: '**', redirectTo:'/' }
];

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
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    UtileriasModule,
    SharedModule,
    FormsModule,
    AerolineaModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [ComponentOne]
})
export class AppModule { }
