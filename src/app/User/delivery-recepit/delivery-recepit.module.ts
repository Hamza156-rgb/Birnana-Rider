import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryRecepitPageRoutingModule } from './delivery-recepit-routing.module';

import { DeliveryRecepitPage } from './delivery-recepit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryRecepitPageRoutingModule
  ],
  declarations: [DeliveryRecepitPage]
})
export class DeliveryRecepitPageModule {}
