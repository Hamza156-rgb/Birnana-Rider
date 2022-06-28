import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'personal',
    loadChildren: () => import('./personal/personal.module').then( m => m.PersonalPageModule)
  },
 
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'document',
    loadChildren: () => import('./document/document.module').then( m => m.DocumentPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'welldone',
    loadChildren: () => import('./welldone/welldone.module').then( m => m.WelldonePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'screen',
    loadChildren: () => import('./User/screen/screen.module').then( m => m.ScreenPageModule)
  },
  {
    path: 'automatic-orders',
    loadChildren: () => import('./User/automatic-orders/automatic-orders.module').then( m => m.AutomaticOrdersPageModule)
  },
  {
    path: 'confirm-pickup',
    loadChildren: () => import('./User/confirm-pickup/confirm-pickup.module').then( m => m.ConfirmPickupPageModule)
  },
  {
    path: 'mark-delivery',
    loadChildren: () => import('./User/mark-delivery/mark-delivery.module').then( m => m.MarkDeliveryPageModule)
  },
  {
    path: 'delivery-recepit',
    loadChildren: () => import('./User/delivery-recepit/delivery-recepit.module').then( m => m.DeliveryRecepitPageModule)
  },
  {
    path: 'pickup-arrived',
    loadChildren: () => import('./User/pickup-arrived/pickup-arrived.module').then( m => m.PickupArrivedPageModule)
  },
  {
    path: 'start-delivery',
    loadChildren: () => import('./User/start-delivery/start-delivery.module').then( m => m.StartDeliveryPageModule)
  },
  {
    path: 'delivery-arrived',
    loadChildren: () => import('./User/delivery-arrived/delivery-arrived.module').then( m => m.DeliveryArrivedPageModule)
  },
  {
    path: 'pick-manually',
    loadChildren: () => import('./User/pick-manually/pick-manually.module').then( m => m.PickManuallyPageModule)
  },
  {
    path: 'manuall-confirm-pickup',
    loadChildren: () => import('./User/manuall-confirm-pickup/manuall-confirm-pickup.module').then( m => m.ManuallConfirmPickupPageModule)
  },
  {
    path: 'next-pickup',
    loadChildren: () => import('./User/next-pickup/next-pickup.module').then( m => m.NextPickupPageModule)
  },
  {
    path: 'cancel-pickup-order',
    loadChildren: () => import('./User/cancel-pickup-order/cancel-pickup-order.module').then( m => m.CancelPickupOrderPageModule)
  },
  {
    path: 'online-deliveryorder',
    loadChildren: () => import('./User/online-deliveryorder/online-deliveryorder.module').then( m => m.OnlineDeliveryorderPageModule)
  },
  {
    path: 'online-pickup-order',
    loadChildren: () => import('./User/online-pickup-order/online-pickup-order.module').then( m => m.OnlinePickupOrderPageModule)
  },
  {
    path: 'manual-order-reciept',
    loadChildren: () => import('./User/manual-order-reciept/manual-order-reciept.module').then( m => m.ManualOrderRecieptPageModule)
  },
  {
    path: 'deliveryarrived1',
    loadChildren: () => import('./User/deliveryarrived1/deliveryarrived1.module').then( m => m.Deliveryarrived1PageModule)
  },
  {
    path: 'home1',
    loadChildren: () => import('./Offline/home1/home1.module').then( m => m.Home1PageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./Offline/home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'home3',
    loadChildren: () => import('./Offline/home3/home3.module').then( m => m.Home3PageModule)
  },
  {
    path: 'home4',
    loadChildren: () => import('./Offline/home4/home4.module').then( m => m.Home4PageModule)
  },
  {
    path: 'earning',
    loadChildren: () => import('./earning/earning.module').then( m => m.EarningPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
