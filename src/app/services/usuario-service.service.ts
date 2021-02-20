import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private http: HttpClient) { 

  }

  obtenerUsuarios(){
    let url = 'https://run.mocky.io/v3/d5ddf1ff-a0e2-4a7e-bbcc-e832bef6a503';
    return this.http.get(url)
      .pipe(map((res: any) => res));
  }
}
