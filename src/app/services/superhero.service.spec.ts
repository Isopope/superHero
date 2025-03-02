import { TestBed } from '@angular/core/testing';

import { SuperheroService } from './superhero.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SuperheroService', () => {
  let service: SuperheroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperheroService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SuperheroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
