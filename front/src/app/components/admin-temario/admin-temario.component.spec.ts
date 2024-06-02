import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTemarioComponent } from './admin-temario.component';

describe('AdminTemarioComponent', () => {
  let component: AdminTemarioComponent;
  let fixture: ComponentFixture<AdminTemarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTemarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminTemarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
