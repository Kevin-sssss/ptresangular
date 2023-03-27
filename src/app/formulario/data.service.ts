import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'procesar_formulario.html';

  constructor(private http: HttpClient) {}

  enviarDatos(data: any) {
    const formData = new FormData();
    formData.append('nombre', data.nombre);
    formData.append('apellido', data.apellido);
    return this.http.post(this.url, formData);
  }
}
