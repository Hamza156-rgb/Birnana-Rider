import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.page.html',
  styleUrls: ['./promotions.page.scss'],
})
export class PromotionsPage implements OnInit {

  constructor(public menuCtrl: MenuController,) { }

  ngOnInit() {
  }


  toggleMenu() {
    this.menuCtrl.toggle("mainMenu");
  }


}
