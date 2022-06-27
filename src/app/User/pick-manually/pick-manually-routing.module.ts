import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickManuallyPage } from './pick-manually.page';

const routes: Routes = [
  {
    path: '',
    component: PickManuallyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickManuallyPageRoutingModule {}
