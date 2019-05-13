import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  nombre:string;
  correo:string;
  clave:string;
  mensaje:string;
  constructor(private servicio:AppService) { }

  ngOnInit() {
  }

  crearCuenta(){
    this.servicio.crearCuenta(this.nombre,this.correo, this.clave).
    subscribe(response =>{
      this.mensaje='Usuario creado exitosamente';  
    },error=>{
      this.mensaje='verifique sus datos';
    });
    
  }
}
