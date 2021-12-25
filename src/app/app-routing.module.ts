import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from "./layouts/main/main.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'main',
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
