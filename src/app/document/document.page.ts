import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-document',
  templateUrl: './document.page.html',
  styleUrls: ['./document.page.scss'],
})
export class DocumentPage implements OnInit {

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
