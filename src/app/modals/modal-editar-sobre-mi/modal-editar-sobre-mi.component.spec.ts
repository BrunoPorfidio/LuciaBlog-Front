import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarSobreMiComponent } from './modal-editar-sobre-mi.component';

describe('ModalEditarSobreMiComponent', () => {
  let component: ModalEditarSobreMiComponent;
  let fixture: ComponentFixture<ModalEditarSobreMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarSobreMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarSobreMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
