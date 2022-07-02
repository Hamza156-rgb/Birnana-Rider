import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-manual-order-reciept',
  templateUrl: './manual-order-reciept.page.html',
  styleUrls: ['./manual-order-reciept.page.scss'],
})
export class ManualOrderRecieptPage implements OnInit {

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
