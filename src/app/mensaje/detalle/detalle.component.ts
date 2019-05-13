import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  id: string;
  nombre: string;
  correo: string;
  mensaje: string;

  constructor(private router: ActivatedRoute, private router2: Router,
    private servicio: AppService) {

    router2.events.subscribe(event => {
      if (event instanceof NavigationEnd || event instanceof NavigationStart ) {
        this.ngOnInit();
      }
      // Instance of should be: 
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });

  }

  ngOnInit() {
    console.log('init');
    this.router.params.subscribe(params => {
      this.id = params.id;
      this.servicio.consultar('mensajes',this.id).subscribe( (mensaje:any) =>{
        console.log('mensaje:'+mensaje);
        this.id = mensaje._id;
        this.nombre = mensaje.nombre;
        this.correo = mensaje.correo;
        this.mensaje = mensaje.mensaje;
      });
    });
  }

}
