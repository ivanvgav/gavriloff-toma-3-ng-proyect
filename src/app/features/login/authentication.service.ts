import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of as ObservableOf } from "rxjs";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ElementoMenu } from 'src/app/core/models/elemento-menu';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  /*
  public getCurrentUser(): User {
    return JSON.parse(localStorage.getItem('user')) as User;
  }

  public login(email: string, password: string) {
    return this.http.post<Respuesta>(`${environment.apiURL}/login`, { email, password })
      .pipe(
        map( (respuesta: Respuesta) => {
          const decoded = jwt_decode(respuesta.data.usuario.token);
          // FIXME: Obtener el usuario del token
          // const user = decoded['sub'] as User;
          const user  = {nombre: 'Eduardo', apellidoMaterno: 'Sanchez'} as User;
          if ( user && respuesta.data.usuario.token ) {
            localStorage.setItem('token', respuesta.data.usuario.token);
            localStorage.setItem('user', JSON.stringify(user));
          }
          return user;
        })
      );
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }*/

  public getMenuElements(): Observable<ElementoMenu[]>{
    return ObservableOf([
      {nombre: 'Lista de Alumnos', enlace: 'lista-de-alumnos', icono: 'shopping_cart'},
      {nombre: 'Lista de Cursos', enlace: 'lista-de-cursos', icono: 'groups'},
    ])
  }
}
