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

  public getMenuElements(): Observable<ElementoMenu[]>{
    return ObservableOf([
      {nombre: 'Lista de Alumnos', enlace: 'estudiantes', icono: 'shopping_cart'},
      {nombre: 'Lista de Cursos', enlace: 'cursos', icono: 'groups'},
    ])
  }
}
