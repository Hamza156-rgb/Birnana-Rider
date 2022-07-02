import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(public menuCtrl: MenuController) { }

  ngOnInit() {
 
  }
  ionViewWillLeave() {
    this.menuCtrl.enable(true, "mainMenu")
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }


}
