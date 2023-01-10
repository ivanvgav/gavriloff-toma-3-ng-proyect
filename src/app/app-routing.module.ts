import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './features/layout/layout.component';
import { MainComponent } from './features/layout/pages/main/main.component';
import { NotfoundComponent } from './features/layout/pages/notfound/notfound.component';
import { AuthGuard } from "./core/guards/auth.guard";


const routes: Routes = [
  {
    path: 'app',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: MainComponent,
        data: {
          nombre: 'Welcome'
        }
      },
      {
        path: 'lista-de-alumnos',
        loadChildren: () => import('./lista-de-alumnos/lista-de-alumnos.module').then(m => m.ListaDeAlumnosModule),
        data: {
          nombre: 'Alumnos'
        }
      },
      {
        path: 'lista-de-cursos',
        loadChildren: () => import('./lista-de-cursos/lista-de-cursos.module').then(m => m.ListaDeCursosModule),
        data: {
          nombre: 'Cursos'
        }
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
