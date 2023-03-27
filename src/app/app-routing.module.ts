import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ClientesComponent } from './clientes/clientes.component';

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'form', component: FormularioComponent },
  { path: 'clientes', component: ClientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
