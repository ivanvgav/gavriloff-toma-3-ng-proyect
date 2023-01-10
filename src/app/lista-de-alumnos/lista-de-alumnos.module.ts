import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDeAlumnosRoutingModule } from './lista-de-alumnos.routing';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { ListaDeAlumnosComponent } from './lista-de-alumnos.component';



@NgModule({
  declarations: [
    ListaDeAlumnosComponent
  ],
  imports: [
    CommonModule,
    ListaDeAlumnosRoutingModule,
    SharedModule
  ]
})
export class ListaDeAlumnosModule { }
