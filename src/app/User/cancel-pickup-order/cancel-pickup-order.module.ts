import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelPickupOrderPageRoutingModule } from './cancel-pickup-order-routing.module';

import { CancelPickupOrderPage } from './cancel-pickup-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancelPickupOrderPageRoutingModule
  ],
  declarations: [CancelPickupOrderPage]
})
export class CancelPickupOrderPageModule {}
