import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SidemenuComponent } from 'src/app/Components/sidemenu/sidemenu.component';
import { WelldonePageRoutingModule } from './welldone-routing.module';

import { WelldonePage } from './welldone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelldonePageRoutingModule
  ],
  declarations: [WelldonePage,SidemenuComponent]
})
export class WelldonePageModule {}
