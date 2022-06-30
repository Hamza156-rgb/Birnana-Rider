import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Home2PageRoutingModule } from './home2-routing.module';
import { MapsComponent } from 'src/app/Components/maps/maps.component';
import { SidemenuComponent } from 'src/app/Components/sidemenu/sidemenu.component';
import { Home2Page } from './home2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Home2PageRoutingModule
  ],
  declarations: [Home2Page,MapsComponent,
    SidemenuComponent]
})
export class Home2PageModule {}
