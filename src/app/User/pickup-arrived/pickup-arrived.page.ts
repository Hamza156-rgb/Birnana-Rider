import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-pickup-arrived',
  templateUrl: './pickup-arrived.page.html',
  styleUrls: ['./pickup-arrived.page.scss'],
})
export class PickupArrivedPage implements OnInit {

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
