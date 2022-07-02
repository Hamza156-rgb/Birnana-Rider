import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {

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
