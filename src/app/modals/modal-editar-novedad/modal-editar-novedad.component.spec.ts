import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarNovedadComponent } from './modal-editar-novedad.component';

describe('ModalEditarNovedadComponent', () => {
  let component: ModalEditarNovedadComponent;
  let fixture: ComponentFixture<ModalEditarNovedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarNovedadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarNovedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
