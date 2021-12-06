import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from "./layouts/main/main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/main/main.module').then(m => m.MainModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
