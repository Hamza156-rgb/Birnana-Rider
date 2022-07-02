import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-mark-delivery',
  templateUrl: './mark-delivery.page.html',
  styleUrls: ['./mark-delivery.page.scss'],
})
export class MarkDeliveryPage implements OnInit {

  constructor(private modalController: ModalController,public menuCtrl: MenuController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

  ionViewWillLeave(){
    this.menuCtrl.enable(true,"mainMenu")
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

}
