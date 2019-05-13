import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-componente-mensaje-lista',
  templateUrl: './componente-mensaje-lista.component.html'
})
export class ComponenteMensajeListaComponent implements OnInit {
  mensajes: Observable<Object>;
  coleccion:string = 'mensajes';
  @Input() listarElementos: boolean;
  constructor(private servicio: AppService) { }

  ngOnInit() {
    this.mensajes = this.servicio.listar(this.coleccion);
  }

  ngOnChanges(listarElementos: any) {
    if(listarElementos){
      this.mensajes = this.servicio.listar(this.coleccion);
      listarElementos=false;
    }
  }

  borrar(id: string) {
    this.servicio.borrar(this.coleccion,id).subscribe(data =>{
      if(data['message'] == 'ok'){
        this.mensajes = this.servicio.listar(this.coleccion);
      }else{
        console.log('Error:'+data);
      }
    });
  }

}
