import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Superhero } from '../models/superhero';
import { SuperheroService } from './superhero.service';

describe('SuperheroService', () => {
  let service: SuperheroService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SuperheroService]
    });

    service = TestBed.inject(SuperheroService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should filter  by name', () => {
    const mockSuperheroes: Superhero[] = [
      {
        id: 1,
        name: "A-Bomb",
        slug: "1-a-bomb",
        powerstats: { intelligence: 38, strength: 100, speed: 17, durability: 80, power: 24, combat: 64 },
        appearance: { gender: "Male", race: "Human", height: ["6'8", "203 cm"], weight: ["980 lb", "441 kg"], eyeColor: "Yellow", hairColor: "No Hair" },
        biography: { fullName: "Richard Milhouse Jones", alterEgos: "No alter egos found.", aliases: ["Rick Jones"], placeOfBirth: "Scarsdale, Arizona", firstAppearance: "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)", publisher: "Marvel Comics", alignment: "good" },
        work: { occupation: "Musician, adventurer, author; formerly talk show host", base: "-" },
        connections: { groupAffiliation: "Hulk Family", relatives: "Marlo Chandler-Jones (wife)" },
        images: { xs: "", sm: "", md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg", lg: "" }
      },
      {
        id: 2,
        name: "Abe Sapien",
        slug: "2-abe-sapien",
        powerstats: { intelligence: 88, strength: 28, speed: 35, durability: 65, power: 100, combat: 85 },
        appearance: { gender: "Male", race: "Icthyo Sapien", height: ["6'3", "191 cm"], weight: ["145 lb", "65 kg"], eyeColor: "Blue", hairColor: "No Hair" },
        biography: { fullName: "Abraham Sapien", alterEgos: "No alter egos found.", aliases: ["Langdon Everett Caul"], placeOfBirth: "-", firstAppearance: "Hellboy: Seed of Destruction (1993)", publisher: "Dark Horse Comics", alignment: "good" },
        work: { occupation: "Paranormal Investigator", base: "-" },
        connections: { groupAffiliation: "Bureau for Paranormal Research and Defense", relatives: "Edith Howard (wife, deceased)" },
        images: { xs: "", sm: "", md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg", lg: "" }
      },
      {
        id: 3,
        name: "Abin Sur",
        slug: "3-abin-sur",
        powerstats: { intelligence: 50, strength: 90, speed: 53, durability: 64, power: 99, combat: 65 },
        appearance: { gender: "Male", race: "Ungaran", height: ["6'1", "185 cm"], weight: ["200 lb", "90 kg"], eyeColor: "Blue", hairColor: "No Hair" },
        biography: { fullName: "", alterEgos: "No alter egos found.", aliases: ["Lagzia"], placeOfBirth: "Ungara", firstAppearance: "Showcase #22 (October, 1959)", publisher: "DC Comics", alignment: "good" },
        work: { occupation: "Green Lantern, former history professor", base: "Oa" },
        connections: { groupAffiliation: "Green Lantern Corps, Black Lantern Corps", relatives: "Amon Sur (son)" },
        images: { xs: "", sm: "", md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg", lg: "" }
      },
      {
        id: 4,
        name: "Deadpool",
        slug: "4-deadpool",
        powerstats: { intelligence: 50, strength: 35, speed: 50, durability: 100, power: 100, combat: 90 },
        appearance: { gender: "Male", race: "Mutant", height: ["6'2", "188 cm"], weight: ["210 lb", "95 kg"], eyeColor: "Brown", hairColor: "No Hair" },
        biography: { fullName: "Wade Winston Wilson", alterEgos: "No alter egos found.", aliases: ["Wade Wilson"], placeOfBirth: "Canada", firstAppearance: "New Mutants #98 (February, 1991)", publisher: "Marvel Comics", alignment: "neutral" },
        work: { occupation: "Mercenary", base: "-" },
        connections: { groupAffiliation: "X-Force", relatives: "Vanessa Carlysle (ex-wife)" },
        images: { xs: "", sm: "", md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/213-deadpool.jpg", lg: "" }
      },
      {
        id: 5,
        name: "Deadshot",
        slug: "5-deadshot",
        powerstats: { intelligence: 50, strength: 10, speed: 23, durability: 20, power: 55, combat: 80 },
        appearance: { gender: "Male", race: "Human", height: ["6'1", "185 cm"], weight: ["202 lb", "91 kg"], eyeColor: "Brown", hairColor: "Brown" },
        biography: { fullName: "Floyd Lawton", alterEgos: "No alter egos found.", aliases: ["Deadshot"], placeOfBirth: "-", firstAppearance: "Batman #59 (June, 1950)", publisher: "DC Comics", alignment: "bad" },
        work: { occupation: "Assassin", base: "-" },
        connections: { groupAffiliation: "Suicide Squad", relatives: "Zoe Lawton (daughter)" },
        images: { xs: "", sm: "", md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/214-deadshot.jpg", lg: "" }
      }
    ];


    service.searchSuperheroes('Dead').subscribe(filteredHeroes => {
      expect(filteredHeroes.length).toBe(2);
      expect(filteredHeroes.some(hero => hero.name === 'Deadpool')).toBeTrue();
      expect(filteredHeroes.some(hero => hero.name === 'Deadshot')).toBeTrue();
    });
    const req = httpMock.expectOne(`${service['dataSource']}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockSuperheroes);
    httpMock.verify();
  });
});
