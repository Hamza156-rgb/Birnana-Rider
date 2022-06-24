import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryArrivedPage } from './delivery-arrived.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryArrivedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryArrivedPageRoutingModule {}
