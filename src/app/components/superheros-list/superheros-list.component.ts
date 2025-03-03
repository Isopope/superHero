import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Superhero } from '../../models/superhero';
import { SuperheroService } from '../../services/superhero.service';


@Component({
  selector: 'app-superheros-list',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule,FormsModule],
  templateUrl: './superheros-list.component.html',
  styleUrl: './superheros-list.component.css'
})
export class SuperherosListComponent {
  superHeroesList:Superhero[]=[];
  searchName:string='';
  constructor(private superHeroService:SuperheroService, private router:Router) {

   }
   ngOnInit() {
    this.loadHeroes()
    
  }

  loadHeroes(){
    this.superHeroService.getAllSuperheroes().subscribe(superheroes => {
      this.superHeroesList = superheroes;
    });

  }

  search() {
    this.superHeroService.searchSuperheroes(this.searchName).subscribe(superheroes => {
      this.superHeroesList = superheroes;
    });
  }

  heroDetailsComponent(id:number) {
    this.router.navigate(['/heroes', id]);
  }


}
