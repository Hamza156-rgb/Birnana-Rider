import { Component, OnInit, } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-screen',
  templateUrl: './screen.page.html',
  styleUrls: ['./screen.page.scss'],
})
export class ScreenPage implements OnInit {


  constructor( public menuCtrl: MenuController,) { }

  ngOnInit() {
  }
  toggleMenu() {
    this.menuCtrl.toggle("mainMenu");
  }
}
