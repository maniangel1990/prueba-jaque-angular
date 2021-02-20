import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficaServiceService {

  constructor(private http: HttpClient) { }

  obtenerDatosgrafica(){
    let url = 'https://run.mocky.io/v3/15517ca5-7e07-4ebc-bf63-5b033ec4e16a';
    return this.http.get(url)
      .pipe(map((res: any) => res))
  }

}
