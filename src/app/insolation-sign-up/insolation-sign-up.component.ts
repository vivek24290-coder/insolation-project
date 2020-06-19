import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-insolation-sign-up',
  templateUrl: './insolation-sign-up.component.html',
  styleUrls: ['./insolation-sign-up.component.scss'],
})
export class InsolationSignUpComponent implements OnInit {

  constructor(private router: Router, private modalCtrl: ModalController) {
    // this.modalCtrl.dismiss();
   }

  ngOnInit() {}

  createAccount()
  {
    this.router.navigate(['/home']);
    console.log('I clicked')
  }

  dismiss()
  {
    this.modalCtrl.dismiss({
      'dismissed': true
    })
  }
}
