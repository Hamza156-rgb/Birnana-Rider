import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-others-profile',
  templateUrl: './others-profile.page.html',
  styleUrls: ['./others-profile.page.scss'],
})
export class OthersProfilePage implements OnInit {

  constructor(public menuCtrl: MenuController,) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuCtrl.toggle("mainMenu");
  }


}
