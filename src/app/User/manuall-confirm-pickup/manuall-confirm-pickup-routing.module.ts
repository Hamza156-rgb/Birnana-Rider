import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManuallConfirmPickupPage } from './manuall-confirm-pickup.page';

const routes: Routes = [
  {
    path: '',
    component: ManuallConfirmPickupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManuallConfirmPickupPageRoutingModule {}
