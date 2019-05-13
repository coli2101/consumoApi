import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarUsuariosComponent } from './usuario/listar-usuarios/listar-usuarios.component';

const routes: Routes = [
  { path: 'listarUsuarios', component: ListarUsuariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
