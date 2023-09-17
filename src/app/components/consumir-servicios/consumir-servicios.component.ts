import { Component, OnInit } from '@angular/core';
import { PaisService } from 'src/app/Services/pais.service';

@Component({
  selector: 'app-consumir-servicios',
  templateUrl: './consumir-servicios.component.html',
  styleUrls: ['./consumir-servicios.component.css']
})
export class ConsumirServiciosComponent implements OnInit {

  public pais: any[] = [];
  constructor(private pais_Services: PaisService) {}

  ngOnInit(): void {
    this.listarPais();
  }

  listarPais = (): void => {
    this.pais_Services.list_paises().subscribe(
      (response) => {
        this.pais = response;
        console.log(this.pais);
      },
      (error) => {
        console.error('Error al obtener el paises:', error);
      }
    );
  };  
}
