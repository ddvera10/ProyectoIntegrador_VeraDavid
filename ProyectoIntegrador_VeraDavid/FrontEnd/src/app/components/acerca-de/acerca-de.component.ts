import { PersonaService } from './../../service/persona.service';
import { Component } from '@angular/core';
import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {
persona: persona = new persona ("", "", "");

constructor(public personaService: PersonaService){}

ngOnInit(): void {
  this.personaService.getPersona().subscribe(data => {this.persona = data})
}

}
