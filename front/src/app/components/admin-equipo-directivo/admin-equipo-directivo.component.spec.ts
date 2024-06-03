import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEquipoDirectivoComponent } from './admin-equipo-directivo.component';

describe('AdminEquipoDirectivoComponent', () => {
  let component: AdminEquipoDirectivoComponent;
  let fixture: ComponentFixture<AdminEquipoDirectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEquipoDirectivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminEquipoDirectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
