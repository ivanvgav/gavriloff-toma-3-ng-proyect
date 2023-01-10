import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDeAlumnosRoutingModule } from './lista-de-alumnos.routing';
import { SharedModule } from '../shared/modules/shared/shared.module';



@NgModule({
  declarations: [
    ListaDeAlumnosModule
  ],
  imports: [
    CommonModule,
    ListaDeAlumnosRoutingModule,
    SharedModule
  ],
  exports: [
    ListaDeAlumnosModule
  ]
})
export class ListaDeAlumnosModule { }
