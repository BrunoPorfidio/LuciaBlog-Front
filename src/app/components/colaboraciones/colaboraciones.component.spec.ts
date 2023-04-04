import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboracionesComponent } from './colaboraciones.component';

describe('ColaboracionesComponent', () => {
  let component: ColaboracionesComponent;
  let fixture: ComponentFixture<ColaboracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboracionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaboracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
