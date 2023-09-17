import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarInventarioInicialComponent } from './cargar-inventario-inicial.component';

describe('CargarInventarioInicialComponent', () => {
  let component: CargarInventarioInicialComponent;
  let fixture: ComponentFixture<CargarInventarioInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarInventarioInicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarInventarioInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
