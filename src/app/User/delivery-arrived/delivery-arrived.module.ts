import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MapsComponent } from 'src/app/Components/maps/maps.component';
import { SidemenuComponent } from 'src/app/Components/sidemenu/sidemenu.component';
import { DeliveryArrivedPageRoutingModule } from './delivery-arrived-routing.module';

import { DeliveryArrivedPage } from './delivery-arrived.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryArrivedPageRoutingModule
  ],
  declarations: [DeliveryArrivedPage,MapsComponent,
    SidemenuComponent]
})
export class DeliveryArrivedPageModule {}
