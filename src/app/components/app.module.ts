import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';
import { AuthCapacitorComponent } from './auth-capacitor/auth-capacitor.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { AccelComponent } from './accel/accel.component';
import { AuthCordovaComponent } from './auth-cordova/auth-cordova.component';

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    AuthCapacitorComponent,
    GeolocationComponent,
    AccelComponent,
    AuthCordovaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
