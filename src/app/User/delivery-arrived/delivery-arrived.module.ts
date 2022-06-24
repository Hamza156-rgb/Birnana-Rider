import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryArrivedPageRoutingModule } from './delivery-arrived-routing.module';

import { DeliveryArrivedPage } from './delivery-arrived.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryArrivedPageRoutingModule
  ],
  declarations: [DeliveryArrivedPage]
})
export class DeliveryArrivedPageModule {}
