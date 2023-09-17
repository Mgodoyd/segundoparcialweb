import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasInventarioComponent } from './entradas-inventario.component';

describe('EntradasInventarioComponent', () => {
  let component: EntradasInventarioComponent;
  let fixture: ComponentFixture<EntradasInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradasInventarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradasInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
