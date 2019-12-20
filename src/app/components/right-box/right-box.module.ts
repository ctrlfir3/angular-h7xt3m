import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightBoxComponent } from './right-box.component';
import { RightPage2Component } from './right-page2/right-page2.component';
import { RightMainPageComponent } from './right-main-page/right-main-page.component';
import { RightBoxRoutingModule } from './right-box-routing.module';

@NgModule({
  declarations: [
    RightBoxComponent,
    RightPage2Component,
    RightMainPageComponent
  ],
  imports: [
    CommonModule,
    RightBoxRoutingModule
  ]
})
export class RightBoxModule { }