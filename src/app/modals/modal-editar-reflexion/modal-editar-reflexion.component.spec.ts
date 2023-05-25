import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarReflexionComponent } from './modal-editar-reflexion.component';

describe('ModalEditarReflexionComponent', () => {
  let component: ModalEditarReflexionComponent;
  let fixture: ComponentFixture<ModalEditarReflexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarReflexionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarReflexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
