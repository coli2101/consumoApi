import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteMensajeFormComponent } from './componente-mensaje-form/componente-mensaje-form.component';
import { ComponenteMensajeListaComponent } from './componente-mensaje-lista/componente-mensaje-lista.component';
import { ComponenteMensajeComponent } from './componente-mensaje/componente-mensaje.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  { path: 'ingresar', component: ComponenteMensajeFormComponent },
  {
    path: 'listar', component: ComponenteMensajeListaComponent,
    children: [{
      path: ':id',
      component: DetalleComponent
    }]
  },
  {
    path: 'combinado', component: ComponenteMensajeComponent,
    children: [{
      path: ':id',
      component: DetalleComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MensajeRoutingModule { }
