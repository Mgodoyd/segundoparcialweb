import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumirServiciosComponent } from './components/consumir-servicios/consumir-servicios.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConsumirServiciosEjercicio2Component } from './components/consumir-servicios-ejercicio2/consumir-servicios-ejercicio2.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsumirServiciosComponent,
    NavbarComponent,
    ConsumirServiciosEjercicio2Component
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
