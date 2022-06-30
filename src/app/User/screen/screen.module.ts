import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { MapsComponent } from 'src/app/Components/maps/maps.component';
import { SidemenuComponent } from 'src/app/Components/sidemenu/sidemenu.component';

import { IonicModule } from '@ionic/angular';

import { ScreenPageRoutingModule } from './screen-routing.module';

import { ScreenPage } from './screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreenPageRoutingModule
  ],
  declarations: [ScreenPage,MapsComponent,SidemenuComponent]
})
export class ScreenPageModule {}
