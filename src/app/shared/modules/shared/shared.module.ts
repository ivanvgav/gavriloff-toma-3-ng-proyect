import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';
import { SidenavComponent } from '../../sidenav/sidenav.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { StudentDialogComponent } from '../../components/student-dialog/student-dialog.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FooterComponent,
    SidenavComponent,
    AngularMaterialModule,
    StudentDialogComponent,
  ],
  exports: [
    SharedModule,
  ]
})
export class SharedModule { }
