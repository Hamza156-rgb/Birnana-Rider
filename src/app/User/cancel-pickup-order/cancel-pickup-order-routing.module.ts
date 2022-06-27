import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelPickupOrderPage } from './cancel-pickup-order.page';

const routes: Routes = [
  {
    path: '',
    component: CancelPickupOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancelPickupOrderPageRoutingModule {}
