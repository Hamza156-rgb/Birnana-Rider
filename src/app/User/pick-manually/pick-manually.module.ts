import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickManuallyPageRoutingModule } from './pick-manually-routing.module';

import { PickManuallyPage } from './pick-manually.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickManuallyPageRoutingModule
  ],
  declarations: [PickManuallyPage]
})
export class PickManuallyPageModule {}
