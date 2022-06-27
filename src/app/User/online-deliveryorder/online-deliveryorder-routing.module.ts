import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlineDeliveryorderPage } from './online-deliveryorder.page';

const routes: Routes = [
  {
    path: '',
    component: OnlineDeliveryorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlineDeliveryorderPageRoutingModule {}
