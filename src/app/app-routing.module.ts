import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*navbar */
import { NavbarComponent } from './components/navbar/navbar.component';

/*consumo de servicios */
import { ConsumirServiciosComponent } from './components/consumir-servicios/consumir-servicios.component';

const routes: Routes = [
   {path:'', component:NavbarComponent},
   {path:'consumir-servicios', component:ConsumirServiciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
