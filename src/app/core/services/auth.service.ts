import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public usuarioActual$: Observable<User | null>;
  private usuarioActual = new BehaviorSubject<User | null >(null);

  constructor() {
    this.usuarioActual$ = this.usuarioActual.asObservable();
   }

  setUsuarioActual(usuarioActual: User): void {
    this.usuarioActual.next(usuarioActual);
  }
}
