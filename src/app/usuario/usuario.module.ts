import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FormsModule } from '@angular/forms';
import { PasswordrecoveryComponent } from './passwordrecovery/passwordrecovery.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, PasswordrecoveryComponent, ListarUsuariosComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    UsuarioRoutingModule
  ],
  exports:[LoginComponent,ListarUsuariosComponent],
  entryComponents:[SignupComponent,PasswordrecoveryComponent,ListarUsuariosComponent]
})
export class UsuarioModule { }
