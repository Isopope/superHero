import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroslistComponent } from './superheroslist.component';

describe('SuperheroslistComponent', () => {
  let component: SuperheroslistComponent;
  let fixture: ComponentFixture<SuperheroslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperheroslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperheroslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
