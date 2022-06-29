import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MapsComponent } from 'src/app/Components/maps/maps.component';
import { SidemenuComponent } from 'src/app/Components/sidemenu/sidemenu.component';
import { Deliveryarrived1PageRoutingModule } from './deliveryarrived1-routing.module';

import { Deliveryarrived1Page } from './deliveryarrived1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Deliveryarrived1PageRoutingModule
  ],
  declarations: [Deliveryarrived1Page,MapsComponent,
    SidemenuComponent]
})
export class Deliveryarrived1PageModule {}
