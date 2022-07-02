import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cancel-pickup-order',
  templateUrl: './cancel-pickup-order.page.html',
  styleUrls: ['./cancel-pickup-order.page.scss'],
})
export class CancelPickupOrderPage implements OnInit {

  constructor(private modalController: ModalController, public menuCtrl: MenuController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }


  ionViewWillLeave() {
    this.menuCtrl.enable(true, "mainMenu")
  }





  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }


}
