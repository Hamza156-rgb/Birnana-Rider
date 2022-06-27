import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualOrderRecieptPage } from './manual-order-reciept.page';

const routes: Routes = [
  {
    path: '',
    component: ManualOrderRecieptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualOrderRecieptPageRoutingModule {}
