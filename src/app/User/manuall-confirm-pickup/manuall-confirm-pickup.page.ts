import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-manuall-confirm-pickup',
  templateUrl: './manuall-confirm-pickup.page.html',
  styleUrls: ['./manuall-confirm-pickup.page.scss'],
})
export class ManuallConfirmPickupPage implements OnInit {

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
