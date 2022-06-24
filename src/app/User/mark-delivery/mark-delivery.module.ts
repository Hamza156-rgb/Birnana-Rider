import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarkDeliveryPageRoutingModule } from './mark-delivery-routing.module';

import { MarkDeliveryPage } from './mark-delivery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarkDeliveryPageRoutingModule
  ],
  declarations: [MarkDeliveryPage]
})
export class MarkDeliveryPageModule {}
