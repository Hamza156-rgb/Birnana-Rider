import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.page.html',
  styleUrls: ['./personal-profile.page.scss'],
})
export class PersonalProfilePage implements OnInit {

  constructor(public menuCtrl: MenuController,) { }

  ngOnInit() {
  }
  toggleMenu() {
    this.menuCtrl.toggle("mainMenu");
  }


}
