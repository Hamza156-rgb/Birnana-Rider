import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManuallConfirmPickupPageRoutingModule } from './manuall-confirm-pickup-routing.module';

import { ManuallConfirmPickupPage } from './manuall-confirm-pickup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManuallConfirmPickupPageRoutingModule
  ],
  declarations: [ManuallConfirmPickupPage]
})
export class ManuallConfirmPickupPageModule {}
