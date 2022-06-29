import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapsComponent } from 'src/app/Components/maps/maps.component';
import { SidemenuComponent } from 'src/app/Components/sidemenu/sidemenu.component';
import { IonicModule } from '@ionic/angular';

import { PickupArrivedPageRoutingModule } from './pickup-arrived-routing.module';

import { PickupArrivedPage } from './pickup-arrived.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickupArrivedPageRoutingModule
  ],
  declarations: [PickupArrivedPage,MapsComponent,SidemenuComponent]
})
export class PickupArrivedPageModule {}
