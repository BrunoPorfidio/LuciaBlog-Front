import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflexionesComponent } from './reflexiones.component';

describe('ReflexionesComponent', () => {
  let component: ReflexionesComponent;
  let fixture: ComponentFixture<ReflexionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflexionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReflexionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
