import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidasInventarioComponent } from './salidas-inventario.component';

describe('SalidasInventarioComponent', () => {
  let component: SalidasInventarioComponent;
  let fixture: ComponentFixture<SalidasInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalidasInventarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalidasInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
