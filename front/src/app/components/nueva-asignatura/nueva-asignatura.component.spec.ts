import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaAsignaturaComponent } from './nueva-asignatura.component';

describe('NuevaAsignaturaComponent', () => {
  let component: NuevaAsignaturaComponent;
  let fixture: ComponentFixture<NuevaAsignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevaAsignaturaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuevaAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
