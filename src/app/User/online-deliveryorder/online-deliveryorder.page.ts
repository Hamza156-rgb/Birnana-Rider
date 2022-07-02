import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-online-deliveryorder',
  templateUrl: './online-deliveryorder.page.html',
  styleUrls: ['./online-deliveryorder.page.scss'],
})
export class OnlineDeliveryorderPage implements OnInit {

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
