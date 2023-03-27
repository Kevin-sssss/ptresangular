import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface DatosGuardados {
  nombre: string;
  fechaNacimiento: string;
  correo: string;
  otraSeleccion: string;
  checkbox: string;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  miFormulario: FormGroup;
  nombre: string | null = null;
  fechaNacimiento: string | null = null;
  correo: string | null = null;
  otraSeleccion: string | null = null;
  checkbox: string | null = null;

  constructor(private router: Router,private formBuilder: FormBuilder) {
    this.miFormulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      otraSeleccion: ['', Validators.required],
      checkbox: [false, Validators.requiredTrue]
    });
  }

  ngOnInit() : void {
    
  }
  submitForm() :void {
      const datosGuardados = localStorage.getItem('datos');
      let datosArray: any[] = [];

      if (datosGuardados !== null) {
        datosArray = JSON.parse(datosGuardados);
      }
  
      const nuevoDato: DatosGuardados = {
        nombre: this.miFormulario.value.nombre,
        fechaNacimiento: this.miFormulario.value.fechaNacimiento,
        correo: this.miFormulario.value.correo,
        otraSeleccion: this.miFormulario.value.otraSeleccion,
        checkbox: this.miFormulario.value.checkbox,
      };
  
      datosArray.push(nuevoDato);
  
      localStorage.setItem('datos', JSON.stringify(datosArray));
      this.router.navigate(['/clientes']);

  }
}