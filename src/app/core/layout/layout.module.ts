import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftbarComponent } from './leftbar/leftbar.component';



@NgModule({
  declarations: [
    LeftbarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LeftbarComponent,
  ]
})
export class LayoutModule { }
