import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartDeliveryPageRoutingModule } from './start-delivery-routing.module';

import { StartDeliveryPage } from './start-delivery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartDeliveryPageRoutingModule
  ],
  declarations: [StartDeliveryPage]
})
export class StartDeliveryPageModule {}
