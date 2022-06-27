import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnlinePickupOrderPageRoutingModule } from './online-pickup-order-routing.module';

import { OnlinePickupOrderPage } from './online-pickup-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnlinePickupOrderPageRoutingModule
  ],
  declarations: [OnlinePickupOrderPage]
})
export class OnlinePickupOrderPageModule {}
