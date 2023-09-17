import { Component, OnInit } from '@angular/core';
import { ListInventarioService } from '../../../../Services/list-inventario.service'

@Component({
  selector: 'app-listar-inventario',
  templateUrl: './listar-inventario.component.html',
  styleUrls: ['./listar-inventario.component.css']
})
export class ListarInventarioComponent implements OnInit {
  public products: any[] = [];

  constructor(private inventarioService: ListInventarioService) {}

  ngOnInit(): void {
    this.listarInventario();
  }

  listarInventario = (): void => {
    this.inventarioService.list_inventario().subscribe(
      (response) => {
        this.products = response;
        console.log(this.products);
      },
      (error) => {
        console.error('Error al obtener el inventario:', error);
      }
    );
  };  
}

  


