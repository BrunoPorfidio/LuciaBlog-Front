import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevoColaboracionComponent } from './modal-nuevo-colaboracion.component';

describe('ModalNuevoColaboracionComponent', () => {
  let component: ModalNuevoColaboracionComponent;
  let fixture: ComponentFixture<ModalNuevoColaboracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNuevoColaboracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNuevoColaboracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
