import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualOrderRecieptPageRoutingModule } from './manual-order-reciept-routing.module';

import { ManualOrderRecieptPage } from './manual-order-reciept.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManualOrderRecieptPageRoutingModule
  ],
  declarations: [ManualOrderRecieptPage]
})
export class ManualOrderRecieptPageModule {}
