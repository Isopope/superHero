import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Superhero } from '../models/superhero';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {
  private dataSource="https://akabab.github.io/superhero-api/api/all.json";


  constructor(private readonly http: HttpClient) { }

  getAllSuperheroes(): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(this.dataSource);
  }

  searchSuperheroes(name: string): Observable<Superhero[]> {
    return this.getAllSuperheroes().pipe(
      map(superheroes => {
        const filteredHeroes: Superhero[] = [];
        superheroes.forEach(hero => {
          if (hero.name.toLowerCase().includes(name.toLowerCase())) {
            filteredHeroes.push(hero);
          }
        });
        return filteredHeroes;
      })
    );
  }
}
