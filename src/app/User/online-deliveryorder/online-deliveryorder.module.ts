import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnlineDeliveryorderPageRoutingModule } from './online-deliveryorder-routing.module';

import { OnlineDeliveryorderPage } from './online-deliveryorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnlineDeliveryorderPageRoutingModule
  ],
  declarations: [OnlineDeliveryorderPage]
})
export class OnlineDeliveryorderPageModule {}
