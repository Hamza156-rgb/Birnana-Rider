import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Home4PageRoutingModule } from './home4-routing.module';
import { MapsComponent } from 'src/app/Components/maps/maps.component';
import { SidemenuComponent } from 'src/app/Components/sidemenu/sidemenu.component';
import { Home4Page } from './home4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Home4PageRoutingModule
  ],
  declarations: [Home4Page,MapsComponent,
    SidemenuComponent]
})
export class Home4PageModule {}
