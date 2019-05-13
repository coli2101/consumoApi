import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private cliente: HttpClient) {
  }

  crearCuenta(nombre: string, correo: string, clave: string) {
    return this.cliente.post(`${environment.apiUrl}/${environment.endpoints.users}`,
      {
        nombre,
        correo,
        clave
      }
    );
  }

  listar(coleccion: string) {
    return this.cliente.get(`${environment.apiUrl}/${coleccion}`, {
      headers: new HttpHeaders({ token: localStorage.getItem('token') ? localStorage.getItem('token') : null })
    });
  }

  consultar(coleccion: string, key: string) {
    return this.cliente.get(`${environment.apiUrl}/${coleccion}/${key}`);
  }

  guardar(coleccion: string, objeto: object) {
    return this.cliente.post(`${environment.apiUrl}/${coleccion}`, objeto);
  }
  borrar(coleccion: string, key: string) {
    return this.cliente.delete(`${environment.apiUrl}/${coleccion}/${key}`);
  }
  subirArchivo(carpeta: string, nombreArchivo: string, archivo: any) {

  }

  autenticar(correo: string, clave: string) {
    return this.cliente.post(`${environment.apiUrl}/${environment.endpoints.users}/login`,
      {
        correo,
        clave
      }
    );
  }
  cerrarSesion() {

  }

  recuperarClave(usuario: string) {

  }

}
