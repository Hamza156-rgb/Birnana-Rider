import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Deliveryarrived1Page } from './deliveryarrived1.page';

const routes: Routes = [
  {
    path: '',
    component: Deliveryarrived1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Deliveryarrived1PageRoutingModule {}
