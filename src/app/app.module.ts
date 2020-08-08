import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InsLoginComponent } from './ins-login/ins-login.component';
import { InsSignUpComponent } from './ins-sign-up/ins-sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsSearchjobsComponent } from './ins-searchjobs/ins-searchjobs.component';


@NgModule({
  declarations: [AppComponent, InsLoginComponent, InsSignUpComponent, InsSearchjobsComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
