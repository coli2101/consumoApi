import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';
import {MatDialog} from '@angular/material';
import { PasswordrecoveryComponent } from '../passwordrecovery/passwordrecovery.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() EmisorEvento: EventEmitter<any> = new EventEmitter();
  usuario: string;
  clave: string;
  mensaje:string;
   
  constructor(private servicio: AppService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  mostrarDialog(componente:string){
    if(componente==='passwordRecovery'){
      this.dialog.open(PasswordrecoveryComponent,{
        width: '400px'
      });
    }else{
      this.dialog.open(SignupComponent,{
        width: '400px'
      });
    }
  }

  autenticar() {
    this.servicio.autenticar(this.usuario, this.clave).subscribe(response =>{
      if(response['success']){
        localStorage.setItem('token',response['token']);
        this.EmisorEvento.emit();
      }else{
      this.mensaje='verifique sus credenciales';
      }
    }
    );

  }

}
