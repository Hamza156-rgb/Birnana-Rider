import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MapsComponent } from 'src/app/Components/maps/maps.component';
import { SidemenuComponent } from 'src/app/Components/sidemenu/sidemenu.component';
import { NextPickupPageRoutingModule } from './next-pickup-routing.module';

import { NextPickupPage } from './next-pickup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NextPickupPageRoutingModule
  ],
  declarations: [NextPickupPage,MapsComponent,
    SidemenuComponent]
})
export class NextPickupPageModule {}
