import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-delivery-arrived',
  templateUrl: './delivery-arrived.page.html',
  styleUrls: ['./delivery-arrived.page.scss'],
})
export class DeliveryArrivedPage implements OnInit {

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
