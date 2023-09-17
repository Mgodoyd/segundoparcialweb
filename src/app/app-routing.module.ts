import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*navbar */
import { NavbarComponent } from './components/navbar/navbar.component';

/*consumo de servicios */
import { ConsumirServiciosComponent } from './components/consumir-servicios/consumir-servicios.component';

/* consumo de servicios ejercicio 2*/
import { ConsumirServiciosEjercicio2Component } from './components/consumir-servicios-ejercicio2/consumir-servicios-ejercicio2.component';



const routes: Routes = [
   {path:'', component:NavbarComponent},
   {path:'consumir-servicios', component:ConsumirServiciosComponent},
   {path:'consumir-servicios-ejercicio2', component:ConsumirServiciosEjercicio2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
