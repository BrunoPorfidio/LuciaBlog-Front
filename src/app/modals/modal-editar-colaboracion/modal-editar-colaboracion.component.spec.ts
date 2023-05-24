import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarColaboracionComponent } from './modal-editar-colaboracion.component';

describe('ModalEditarColaboracionComponent', () => {
  let component: ModalEditarColaboracionComponent;
  let fixture: ComponentFixture<ModalEditarColaboracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarColaboracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarColaboracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
