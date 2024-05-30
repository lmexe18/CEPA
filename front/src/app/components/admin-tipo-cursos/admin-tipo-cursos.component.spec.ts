import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTipoCursosComponent } from './admin-tipo-cursos.component';

describe('AdminTipoCursosComponent', () => {
  let component: AdminTipoCursosComponent;
  let fixture: ComponentFixture<AdminTipoCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTipoCursosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminTipoCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
