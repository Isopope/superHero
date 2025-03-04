import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SuperheroService } from '../../services/superhero.service';
import { SuperherosListComponent } from './superheros-list.component';

describe('SuperherosListComponent', () => {
  let component: SuperherosListComponent;
  let fixture: ComponentFixture<SuperherosListComponent>;
  let mockSuperheroService: jasmine.SpyObj<SuperheroService>;
  let mockRouter: jasmine.SpyObj<Router>;


  beforeEach(async () => {
    mockSuperheroService = jasmine.createSpyObj('SuperheroService', ['getAllSuperheroes', 'searchSuperheroes']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [SuperherosListComponent],
      providers: [
        { provide: SuperheroService, useValue: mockSuperheroService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(SuperherosListComponent);
    component = fixture.componentInstance;
});

});
