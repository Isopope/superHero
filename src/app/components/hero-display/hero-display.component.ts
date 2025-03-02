import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Superhero } from '../../models/superhero';
import { SuperheroService } from '../../services/superhero.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-display',
  imports: [CommonModule,RouterModule,HttpClientModule,FormsModule],
  templateUrl: './hero-display.component.html',
  styleUrl: './hero-display.component.css'
})
export class HeroDisplayComponent {
  hero!: Superhero;

  constructor(
    private route: ActivatedRoute,
    private superheroService: SuperheroService
  ) {}

  ngOnInit() {
    const heroId = this.route.snapshot.paramMap.get('id');
    if (heroId) {
      this.loadHero(parseInt(heroId));
    }
  }

  loadHero(id: number) {
    this.superheroService.getAllSuperheroes().subscribe(data => {
      const foundHero = data.find(hero => hero.id === id);
      if (foundHero) {
        this.hero = foundHero;
      } else {
        console.error('Aucun super-héros trouvé ');
      }
    });
  }

}
