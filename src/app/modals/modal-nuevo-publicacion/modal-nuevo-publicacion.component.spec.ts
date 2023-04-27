import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevoPublicacionComponent } from './modal-nuevo-publicacion.component';

describe('ModalNuevoPublicacionComponent', () => {
  let component: ModalNuevoPublicacionComponent;
  let fixture: ComponentFixture<ModalNuevoPublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNuevoPublicacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNuevoPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
