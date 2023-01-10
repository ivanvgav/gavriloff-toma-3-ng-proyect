import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidenavComponent } from 'src/app/shared/sidenav/sidenav.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SidenavComponent,
    NotfoundComponent,
    FooterComponent,
    ToolbarComponent,
    LoginComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    LayoutRoutingModule  
  ]
})
export class LayoutModule { }
