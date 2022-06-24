import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelldonePageRoutingModule } from './welldone-routing.module';

import { WelldonePage } from './welldone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelldonePageRoutingModule
  ],
  declarations: [WelldonePage]
})
export class WelldonePageModule {}
