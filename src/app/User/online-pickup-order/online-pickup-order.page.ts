import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-online-pickup-order',
  templateUrl: './online-pickup-order.page.html',
  styleUrls: ['./online-pickup-order.page.scss'],
})
export class OnlinePickupOrderPage implements OnInit {

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
