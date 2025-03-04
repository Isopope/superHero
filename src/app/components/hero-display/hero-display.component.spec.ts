import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDisplayComponent } from './hero-display.component';

describe('HeroDisplayComponent', () => {
  let component: HeroDisplayComponent;
  let fixture: ComponentFixture<HeroDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
