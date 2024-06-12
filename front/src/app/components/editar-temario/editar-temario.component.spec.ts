import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTemarioComponent } from './editar-temario.component';

describe('EditarTemarioComponent', () => {
  let component: EditarTemarioComponent;
  let fixture: ComponentFixture<EditarTemarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarTemarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarTemarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
