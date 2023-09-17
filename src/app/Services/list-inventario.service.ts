import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListInventarioService {

  constructor(
    private _http: HttpClient,
  ) { }

  list_inventario(): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.get( 'https://fakestoreapi.com/products', {headers: headers});
  }
}
