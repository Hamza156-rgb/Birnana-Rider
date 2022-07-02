import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page implements OnInit {

  constructor(public menuCtrl: MenuController,) { }

  ngOnInit() {
  }
  toggleMenu() {
    this.menuCtrl.toggle("mainMenu");
  }

}
