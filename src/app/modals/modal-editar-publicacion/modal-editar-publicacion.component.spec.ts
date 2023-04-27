import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarPublicacionComponent } from '../modal-editar-publicacion/modal-editar-publicacion.component';

describe('ModalEditarPublicacionComponent', () => {
  let component: ModalEditarPublicacionComponent;
  let fixture: ComponentFixture<ModalEditarPublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarPublicacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
