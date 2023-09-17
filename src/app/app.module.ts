import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumirServiciosComponent } from './components/consumir-servicios/consumir-servicios.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConsumirServiciosEjercicio2Component } from './components/consumir-servicios-ejercicio2/consumir-servicios-ejercicio2.component';
import { CargarInventarioInicialComponent } from './components/ejercicio 3/Inventarios/cargar-inventario-inicial/cargar-inventario-inicial.component';
import { EntradasInventarioComponent } from './components/ejercicio 3/Inventarios/entradas-inventario/entradas-inventario.component';
import { SalidasInventarioComponent } from './components/ejercicio 3/Inventarios/salidas-inventario/salidas-inventario.component';
import { ListarInventarioComponent } from './components/ejercicio 3/Inventarios/listar-inventario/listar-inventario.component';
import { ReporteCierreComponent } from './components/ejercicio 3/Inventarios/reporte-cierre/reporte-cierre.component';
import { NuevoProveedorComponent } from './components/ejercicio 3/Proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { ListarProveedorComponent } from './components/ejercicio 3/Proveedores/listar-proveedor/listar-proveedor.component';
import { ConsultaProveedorComponent } from './components/ejercicio 3/Proveedores/consulta-proveedor/consulta-proveedor.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsumirServiciosComponent,
    NavbarComponent,
    ConsumirServiciosEjercicio2Component,
    CargarInventarioInicialComponent,
    EntradasInventarioComponent,
    SalidasInventarioComponent,
    ListarInventarioComponent,
    ReporteCierreComponent,
    NuevoProveedorComponent,
    ListarProveedorComponent,
    ConsultaProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
