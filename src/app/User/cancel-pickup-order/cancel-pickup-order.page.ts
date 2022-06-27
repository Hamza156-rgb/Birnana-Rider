import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cancel-pickup-order',
  templateUrl: './cancel-pickup-order.page.html',
  styleUrls: ['./cancel-pickup-order.page.scss'],
})
export class CancelPickupOrderPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }


}
