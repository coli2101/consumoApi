import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-passwordrecovery',
  templateUrl: './passwordrecovery.component.html',
  styleUrls: ['./passwordrecovery.component.scss']
})
export class PasswordrecoveryComponent implements OnInit {

  usuario:string;
mensaje:string;

  constructor(private servicio:AppService) { }

  ngOnInit() {
  }

  recuperar(){
    if(this.usuario===null){
      this.mensaje='Debe ingresar el correo';
      return;
    }
    this.servicio.recuperarClave(this.usuario);
  }
}
