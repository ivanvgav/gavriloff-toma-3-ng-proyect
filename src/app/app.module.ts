import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/modules/shared/shared.module';
import { LayoutComponent } from './features/layout/layout.component';
import { MainComponent } from './features/layout/pages/main/main.component';
import { NotfoundComponent } from './features/layout/pages/notfound/notfound.component';
import { ListaDeAlumnosComponent } from './lista-de-alumnos/lista-de-alumnos.component';
import { ListaDeCursosComponent } from './lista-de-cursos/lista-de-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MainComponent,
    NotfoundComponent,
    ListaDeAlumnosComponent,
    ListaDeCursosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
