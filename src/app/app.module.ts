import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftBoxComponent } from './components/left-box/left-box.component';
import { RightBoxComponent } from './components/right-box/right-box.component';
import { LeftMainPageComponent } from './components/left-box/left-main-page/left-main-page.component';
import { LeftPage2Component } from './components/left-box/left-page2/left-page2.component';
import { RightMainPageComponent } from './components/right-box/right-main-page/right-main-page.component';
import { RightPage2Component } from './components/right-box/right-page2/right-page2.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftBoxComponent,
    RightBoxComponent,
    LeftMainPageComponent,
    LeftPage2Component,
    RightMainPageComponent,
    RightPage2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
