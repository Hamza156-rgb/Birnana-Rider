import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Deliveryarrived1PageRoutingModule } from './deliveryarrived1-routing.module';

import { Deliveryarrived1Page } from './deliveryarrived1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Deliveryarrived1PageRoutingModule
  ],
  declarations: [Deliveryarrived1Page]
})
export class Deliveryarrived1PageModule {}
