import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDocumentosProgComponent } from './admin-documentos-prog.component';

describe('AdminDocumentosProgComponent', () => {
  let component: AdminDocumentosProgComponent;
  let fixture: ComponentFixture<AdminDocumentosProgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDocumentosProgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDocumentosProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
