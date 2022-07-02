import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-confirm-pickup',
  templateUrl: './confirm-pickup.page.html',
  styleUrls: ['./confirm-pickup.page.scss'],
})
export class ConfirmPickupPage implements OnInit {

  constructor(public menuCtrl: MenuController) { }

  ngOnInit() {
  }

  ionViewWillLeave(){
    this.menuCtrl.enable(true,"mainMenu")
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }


}
