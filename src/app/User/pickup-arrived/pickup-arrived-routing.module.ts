import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickupArrivedPage } from './pickup-arrived.page';

const routes: Routes = [
  {
    path: '',
    component: PickupArrivedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickupArrivedPageRoutingModule {}
