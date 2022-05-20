import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { Persona } from '../shared/interfaces/persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.sass'],
  providers: [
    PersonasService
  ]
})
export class PersonasComponent implements OnInit {
  personas : Persona[] = [];
  constructor(private personasService:PersonasService) { }

  ngOnInit(): void {
    this.personasService.getPersonas().subscribe(data => {
      this.personas = data["personas"];
    });
  }

}
