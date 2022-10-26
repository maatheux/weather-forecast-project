import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: "home",
  },
  {
    path: "home",
    loadChildren: () => import('./pages/home-page/home-page.module').then(module => module.HomePageModule),
    component: HomePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
