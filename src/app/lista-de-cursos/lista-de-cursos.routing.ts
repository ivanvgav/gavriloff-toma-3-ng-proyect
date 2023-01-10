import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListaDeCursosComponent } from "./lista-de-cursos.component";

const routes: Routes = [
    {
        path: '',
        component: ListaDeCursosComponent,
        data: {
            nombre: 'Lista de Cursos'
        }
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ListaDeCursosRoutingModule { }