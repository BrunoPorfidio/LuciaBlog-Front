import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevoReflexionComponent } from './modal-nuevo-reflexion.component';

describe('ModalNuevoReflexionComponent', () => {
  let component: ModalNuevoReflexionComponent;
  let fixture: ComponentFixture<ModalNuevoReflexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNuevoReflexionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNuevoReflexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
