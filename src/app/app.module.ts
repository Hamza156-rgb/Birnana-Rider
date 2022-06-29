import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { MenubarComponent } from './menubar/menubar.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';


@NgModule({
  declarations: [AppComponent,MenubarComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    Geolocation,    
    NativeGeocoder,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy ,
   }],
  bootstrap: [AppComponent],

})
export class AppModule { }
