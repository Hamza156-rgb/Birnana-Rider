import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-pick-manually',
  templateUrl: './pick-manually.page.html',
  styleUrls: ['./pick-manually.page.scss'],
})
export class PickManuallyPage implements OnInit {

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
