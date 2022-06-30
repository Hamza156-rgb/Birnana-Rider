import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Home1PageRoutingModule } from './home1-routing.module';
import { MapsComponent } from 'src/app/Components/maps/maps.component';
import { SidemenuComponent } from 'src/app/Components/sidemenu/sidemenu.component';

import { Home1Page } from './home1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Home1PageRoutingModule
  ],
  declarations: [Home1Page,MapsComponent,SidemenuComponent]
})
export class Home1PageModule {}
