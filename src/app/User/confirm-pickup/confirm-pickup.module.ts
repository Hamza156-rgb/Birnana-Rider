import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapsComponent } from 'src/app/Components/maps/maps.component';
import { SidemenuComponent } from 'src/app/Components/sidemenu/sidemenu.component';
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
  declarations: [ConfirmPickupPage, MapsComponent,SidemenuComponent]
})
export class ConfirmPickupPageModule { }
