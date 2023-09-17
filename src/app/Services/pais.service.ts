import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(
    private _http: HttpClient,
  ) { }

  
  list_paises(): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.get( 'https://restcountries.com/v3.1/all', {headers: headers});
  }
}
