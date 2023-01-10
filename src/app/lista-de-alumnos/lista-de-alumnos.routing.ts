import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListaDeAlumnosComponent } from "./lista-de-alumnos.component";

const routes: Routes = [
    {
        path: '',
        component: ListaDeAlumnosComponent,
        data: {
            nombre: 'Lista de Alumnos'
        }
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ListaDeAlumnosRoutingModule { }
  