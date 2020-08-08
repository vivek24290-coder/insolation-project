import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InsLoginComponent } from './ins-login/ins-login.component';
import { InsSignUpComponent } from './ins-sign-up/ins-sign-up.component';
import { InsSearchjobsComponent } from './ins-searchjobs/ins-searchjobs.component';

const routes: Routes = [
  {
    // We are treating the home page as Login Page
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    component: InsLoginComponent
  },
  {
    path: 'signup',
    component: InsSignUpComponent
  },
  {
    path: 'search',
    component: InsSearchjobsComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
