import { Component, OnInit } from '@angular/core';
import { ListProveedoresService } from '../../../../Services/list-proveedores.service';

@Component({
  selector: 'app-listar-proveedor',
  templateUrl: './listar-proveedor.component.html',
  styleUrls: ['./listar-proveedor.component.css']
})
export class ListarProveedorComponent implements OnInit {
  public proveedores: any[] = [];

  constructor(private proveedoresService: ListProveedoresService) {
  }

  ngOnInit(): void {
    this.proveedores = this.proveedoresService.listarProveedores();
    console.log(this.proveedores);
  }
}
