import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-welldone',
  templateUrl: './welldone.page.html',
  styleUrls: ['./welldone.page.scss'],
})
export class WelldonePage implements OnInit {

  constructor(public menuCtrl: MenuController) { }

  ngOnInit() {
    this.menuCtrl.enable(false, "mainMenu")
  }
  ionViewWillLeave() {
    this.menuCtrl.enable(true, "mainMenu")
  }

}
