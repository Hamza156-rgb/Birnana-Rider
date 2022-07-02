import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-earning',
  templateUrl: './earning.page.html',
  styleUrls: ['./earning.page.scss'],
})
export class EarningPage implements OnInit {

  constructor(private modalController: ModalController,public menuCtrl: MenuController,) { }

  ngOnInit() {
  }


  closeModal() {
    this.modalController.dismiss();
  }

  toggleMenu() {
    this.menuCtrl.toggle("mainMenu");
  }

}
