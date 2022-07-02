import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  constructor(public menuCtrl: MenuController,) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuCtrl.toggle("mainMenu");
  }


}
