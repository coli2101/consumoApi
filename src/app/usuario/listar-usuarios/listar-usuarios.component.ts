import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit {
  usuarios: Observable<any>;
  displayedColumns: string[] = ['nombre','correo'];
  loading: boolean;
  constructor(private servicio: AppService) { }

  ngOnInit() {
    this.loading=true;
    this.usuarios = this.servicio.listar('usuarios');
    this.loading=false;
  }


}
