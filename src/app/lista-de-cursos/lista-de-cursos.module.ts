import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDeCursosRoutingModule } from './lista-de-cursos.routing';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { ListaDeAlumnosComponent } from '../lista-de-alumnos/lista-de-alumnos.component';



@NgModule({
  declarations: [
    ListaDeAlumnosComponent
  ],
  imports: [
    CommonModule,
    ListaDeCursosRoutingModule,
    SharedModule
  ]
})
export class ListaDeCursosModule { }
