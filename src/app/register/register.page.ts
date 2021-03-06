import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

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
