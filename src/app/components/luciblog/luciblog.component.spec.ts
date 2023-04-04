import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuciblogComponent } from './luciblog.component';

describe('LuciblogComponent', () => {
  let component: LuciblogComponent;
  let fixture: ComponentFixture<LuciblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuciblogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuciblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
