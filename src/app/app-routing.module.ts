import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LeftBoxComponent } from "./components/left-box/left-box.component";
import { LeftMainPageComponent } from "./components/left-box/left-main-page/left-main-page.component";
import { RightBoxComponent } from "./components/right-box/right-box.component";
import { LeftPage2Component } from "./components/left-box/left-page2/left-page2.component";
import { RightMainPageComponent } from "./components/right-box/right-main-page/right-main-page.component";
import { RightPage2Component } from "./components/right-box/right-page2/right-page2.component";
import { LeftBoxRoutingModule } from './components/left-box/left-box-routing.module';
import { RightBoxRoutingModule } from './components/right-box/right-box-routing.module';

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", component: LeftMainPageComponent },
      { path: "", component: RightMainPageComponent, outlet: "righty" }
    ]
  }
];

@NgModule({
  imports: [
    LeftBoxRoutingModule,
    RightBoxRoutingModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
