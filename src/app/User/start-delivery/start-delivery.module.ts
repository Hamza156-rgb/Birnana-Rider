import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartDeliveryPageRoutingModule } from './start-delivery-routing.module';
import { MapsComponent } from 'src/app/Components/maps/maps.component';
import { SidemenuComponent } from 'src/app/Components/sidemenu/sidemenu.component';
import { StartDeliveryPage } from './start-delivery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartDeliveryPageRoutingModule
  ],
  declarations: [StartDeliveryPage,MapsComponent,SidemenuComponent]
})
export class StartDeliveryPageModule {}
