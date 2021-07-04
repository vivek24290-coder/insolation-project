import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsolationSignUpRoutingModule } from './insolation-sign-up-routing.module';
import { InsolationSignUpComponent } from './insolation-sign-up.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    InsolationSignUpRoutingModule
  ]
})
export class InsolationSignUpModule { }
