import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTipoCursosComponent } from './nuevo-tipo-cursos.component';

describe('NuevoTipoCursosComponent', () => {
  let component: NuevoTipoCursosComponent;
  let fixture: ComponentFixture<NuevoTipoCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoTipoCursosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuevoTipoCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
