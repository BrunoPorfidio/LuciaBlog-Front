import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevoNovedadComponent } from './modal-nuevo-novedad.component';

describe('ModalNuevoNovedadComponent', () => {
  let component: ModalNuevoNovedadComponent;
  let fixture: ComponentFixture<ModalNuevoNovedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNuevoNovedadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNuevoNovedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
