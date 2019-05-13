import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  estaAutenticado: boolean = false;
  
  constructor(private servicio: AppService,private router:Router) {
  }

  ngOnInit(){
    if(localStorage.getItem('user')){
      this.estaAutenticado=true;
    }
    this.estaAutenticado=true;
  }

  autenticar(){
    this.estaAutenticado=true;
  }


  cerrarSesion() {
    this.servicio.cerrarSesion();
    this.estaAutenticado = false;
    localStorage.removeItem('user');
    this.router.navigate(['/'])
  }

}
