import { Component } from '@angular/core';
import { Router, } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router,public menuCtrl: MenuController) {
    setTimeout(() => {
      this.router.navigateByUrl('/welcome');
    }, 2000);
  }

  ngOnInit() {
    this.menuCtrl.enable(false,"mainMenu")
  }
ionViewWillLeave(){
  this.menuCtrl.enable(true,"mainMenu")
}
 
}
