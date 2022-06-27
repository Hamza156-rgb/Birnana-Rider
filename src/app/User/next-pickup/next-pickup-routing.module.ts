import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NextPickupPage } from './next-pickup.page';

const routes: Routes = [
  {
    path: '',
    component: NextPickupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NextPickupPageRoutingModule {}
