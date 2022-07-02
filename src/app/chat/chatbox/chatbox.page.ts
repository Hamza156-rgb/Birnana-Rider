import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.page.html',
  styleUrls: ['./chatbox.page.scss'],
})
export class ChatboxPage implements OnInit {

  constructor(
    public menuCtrl: MenuController) { }

  ngOnInit() {
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true, "mainMenu")
  }





  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }



}
