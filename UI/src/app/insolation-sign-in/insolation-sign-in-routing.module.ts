import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsolationSignInComponent } from './insolation-sign-in.component';


const routes: Routes = [
  {
    path: '',
    component: InsolationSignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [InsolationSignInComponent]
})
export class InsolationSignInRoutingModule { }
