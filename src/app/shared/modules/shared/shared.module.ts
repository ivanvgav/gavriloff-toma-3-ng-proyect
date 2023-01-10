import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';
import { SidenavComponent } from '../../sidenav/sidenav.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FooterComponent,
    SidenavComponent,
    AngularMaterialModule,
  ],
  exports: [
    SharedModule,
  ]
})
export class SharedModule { }
