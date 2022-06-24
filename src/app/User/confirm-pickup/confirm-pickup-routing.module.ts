import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmPickupPage } from './confirm-pickup.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmPickupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmPickupPageRoutingModule {}
