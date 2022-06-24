import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarkDeliveryPage } from './mark-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: MarkDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarkDeliveryPageRoutingModule {}
