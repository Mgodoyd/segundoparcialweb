import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListProveedoresService {

  private proveedores = [
    { id: 1, 
      razonSocial: 'Amazon',
       direccion: '35200 Jon Extension USA', 
       nit: 'NIT 123456789',
        estado: 'Activo' },
    { id: 2, 
      razonSocial: 'Walmart', 
      direccion: '565 Lind Route USA', 
      nit: 'NIT 2345678901', 
      estado: 'Inactivo' },
    { id: 3, 
      razonSocial: 'Shein',
       direccion: '1234 Shein Street China', 
       nit: 'NIT 376598346', 
       estado: 'Activo' },
  ];

  constructor() { }

  listarProveedores() {
    return this.proveedores;
  }
}
