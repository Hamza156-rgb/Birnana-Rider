import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-mark-delivery',
  templateUrl: './mark-delivery.page.html',
  styleUrls: ['./mark-delivery.page.scss'],
})
export class MarkDeliveryPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
