import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InsolationSignUpComponent } from '../insolation-sign-up/insolation-sign-up.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) {}

  async presentModal()
  {
    const modal = await this.modalController.create({
      component: InsolationSignUpComponent,
      cssClass: 'my-custom-class'
    });
    return (await modal).present();
  }
}
