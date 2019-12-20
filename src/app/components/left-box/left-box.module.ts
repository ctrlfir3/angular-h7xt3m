import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftBoxRoutingModule } from './left-box-routing.module';
import { LeftBoxComponent } from './left-box.component';
import { LeftPage2Component } from './left-page2/left-page2.component';
import { LeftMainPageComponent } from './left-main-page/left-main-page.component';

@NgModule({
  declarations: [
    LeftBoxComponent,
    LeftPage2Component,
    LeftMainPageComponent
  ],
  imports: [
    CommonModule,
    LeftBoxRoutingModule
  ]
})
export class LeftBoxModule { }