import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoCursoComponent } from './editar-tipo-curso.component';

describe('EditarTipoCursoComponent', () => {
  let component: EditarTipoCursoComponent;
  let fixture: ComponentFixture<EditarTipoCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarTipoCursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarTipoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
