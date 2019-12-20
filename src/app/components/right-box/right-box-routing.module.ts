import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RightBoxComponent } from './right-box.component';
import { RightMainPageComponent } from './right-main-page/right-main-page.component';
import { RightPage2Component } from './right-page2/right-page2.component';

const routes: Routes = [
  {
    path: "main",
    component: RightBoxComponent,
    outlet: 'righty',
    children: [
      { path: "", redirectTo: "m", pathMatch: "full" },
      { path: "m", component: RightMainPageComponent },
      { path: "n", component: RightPage2Component}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RightBoxRoutingModule {}