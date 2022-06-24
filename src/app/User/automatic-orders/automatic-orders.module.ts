import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutomaticOrdersPageRoutingModule } from './automatic-orders-routing.module';

import { AutomaticOrdersPage } from './automatic-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutomaticOrdersPageRoutingModule
  ],
  declarations: [AutomaticOrdersPage]
})
export class AutomaticOrdersPageModule {}
