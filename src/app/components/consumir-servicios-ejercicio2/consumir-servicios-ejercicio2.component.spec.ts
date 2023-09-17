import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumirServiciosEjercicio2Component } from './consumir-servicios-ejercicio2.component';

describe('ConsumirServiciosEjercicio2Component', () => {
  let component: ConsumirServiciosEjercicio2Component;
  let fixture: ComponentFixture<ConsumirServiciosEjercicio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumirServiciosEjercicio2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumirServiciosEjercicio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
