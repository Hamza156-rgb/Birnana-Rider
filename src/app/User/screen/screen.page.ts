import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { MenuComponent } from 'src/app/Component/menu/menu.component'

@Component({
  selector: 'app-screen',
  templateUrl: './screen.page.html',
  styleUrls: ['./screen.page.scss'],
})
export class ScreenPage implements OnInit {
  rootPage:any = MenuComponent;
  constructor(private menu: MenuController, ) { }

  ngOnInit() {
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
