import { Component,HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  datos: any[] = [];

  constructor() { }

  ngOnInit(): void {
    const datosGuardados = localStorage.getItem('datos');
    if (datosGuardados !== null) {
      this.datos = JSON.parse(datosGuardados);
      console.log('Datos cargados desde localStorage: ', this.datos);

    }
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event: Event) {
    localStorage.removeItem('datos');
  }
}
