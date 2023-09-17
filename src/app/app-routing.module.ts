import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*navbar */
import { NavbarComponent } from './components/navbar/navbar.component';

/*consumo de servicios */
import { ConsumirServiciosComponent } from './components/consumir-servicios/consumir-servicios.component';

/* consumo de servicios ejercicio 2*/
import { ConsumirServiciosEjercicio2Component } from './components/consumir-servicios-ejercicio2/consumir-servicios-ejercicio2.component';

/* Inventario */
import { CargarInventarioInicialComponent } from './components/ejercicio 3/Inventarios/cargar-inventario-inicial/cargar-inventario-inicial.component';
import { EntradasInventarioComponent } from './components/ejercicio 3/Inventarios/entradas-inventario/entradas-inventario.component';
import { ListarInventarioComponent } from './components/ejercicio 3/Inventarios/listar-inventario/listar-inventario.component';
import { ReporteCierreComponent } from './components/ejercicio 3/Inventarios/reporte-cierre/reporte-cierre.component';
import { SalidasInventarioComponent } from './components/ejercicio 3/Inventarios/salidas-inventario/salidas-inventario.component';

/*Proveedor */
import { NuevoProveedorComponent } from './components/ejercicio 3/Proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { ListarProveedorComponent } from './components/ejercicio 3/Proveedores/listar-proveedor/listar-proveedor.component';
import { ConsultaProveedorComponent } from './components/ejercicio 3/Proveedores/consulta-proveedor/consulta-proveedor.component';



const routes: Routes = [
   {path:'', component:NavbarComponent},
   {path:'consumir-servicios', component:ConsumirServiciosComponent},
   {path:'consumir-servicios-ejercicio2', component:ConsumirServiciosEjercicio2Component},
   {path:'cargar-inventario-inicial', component:CargarInventarioInicialComponent},
   {path:'entradas-inventario', component:EntradasInventarioComponent},
   {path:'listar-inventario', component:ListarInventarioComponent},
   {path:'reporte-cierre', component:ReporteCierreComponent},
   {path:'salidas-inventario', component:SalidasInventarioComponent},
   {path:'nuevo-proveedor', component:NuevoProveedorComponent},
   {path:'listar-proveedor', component:ListarProveedorComponent},
   {path:'consulta-proveedor', component:ConsultaProveedorComponent},
    {path:'**', component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
