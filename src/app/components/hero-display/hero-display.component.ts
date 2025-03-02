import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuperheroService } from '../../services/superhero.service';

@Component({
  selector: 'app-hero-display',
  imports: [],
  templateUrl: './hero-display.component.html',
  styleUrl: './hero-display.component.css'
})
export class HeroDisplayComponent {

  constructor(
    private route: ActivatedRoute,
    private superheroService: SuperheroService
  ) {}

}
