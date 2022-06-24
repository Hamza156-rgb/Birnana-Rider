import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmPickupPageRoutingModule } from './confirm-pickup-routing.module';

import { ConfirmPickupPage } from './confirm-pickup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmPickupPageRoutingModule
  ],
  declarations: [ConfirmPickupPage]
})
export class ConfirmPickupPageModule {}
