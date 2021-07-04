import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsolationSignUpComponent } from './insolation-sign-up.component';
import { HomePage } from '../home/home.page';


const routes: Routes = [
  {
    path: '',
    component: InsolationSignUpComponent
  },
  {
    path: 'home',
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [InsolationSignUpComponent]
})
export class InsolationSignUpRoutingModule { }
