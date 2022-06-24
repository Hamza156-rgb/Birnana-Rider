import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryRecepitPage } from './delivery-recepit.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryRecepitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryRecepitPageRoutingModule {}
