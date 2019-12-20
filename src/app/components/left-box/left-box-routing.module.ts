import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LeftBoxComponent } from "./left-box.component";
import { LeftMainPageComponent } from './left-main-page/left-main-page.component';
import { LeftPage2Component } from './left-page2/left-page2.component';

const routes: Routes = [
  {
    path: "main",
    component: LeftBoxComponent,
    children: [
      { path: "", redirectTo: "m", pathMatch: "full" },
      { path: "m", component: LeftMainPageComponent },
      { path: "n", component: LeftPage2Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeftBoxRoutingModule {}