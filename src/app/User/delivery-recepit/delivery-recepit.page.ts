import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-delivery-recepit',
  templateUrl: './delivery-recepit.page.html',
  styleUrls: ['./delivery-recepit.page.scss'],
})
export class DeliveryRecepitPage implements OnInit {

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
