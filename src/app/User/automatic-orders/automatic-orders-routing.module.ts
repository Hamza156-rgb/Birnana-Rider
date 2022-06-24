import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutomaticOrdersPage } from './automatic-orders.page';

const routes: Routes = [
  {
    path: '',
    component: AutomaticOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutomaticOrdersPageRoutingModule {}
