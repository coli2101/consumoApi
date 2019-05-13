import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-mensaje',
  templateUrl: './componente-mensaje.component.html'
})
export class ComponenteMensajeComponent implements OnInit {
 
  listarHijo:boolean=false;
  constructor() {
  }

  ngOnInit() {
    this.listarHijo=false;
  }
  listar(){
    this.listarHijo=true;
  }

}

