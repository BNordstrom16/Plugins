import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CameraComponent } from './camera/camera.component';
import { AuthCapacitorComponent } from './auth-capacitor/auth-capacitor.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { AccelComponent } from "./accel/accel.component";
import { AuthCordovaComponent } from './auth-cordova/auth-cordova.component';


const routes: Routes = [
  { path: 'camera-plugin', component: CameraComponent },
  { path: 'show-auth-capacitor', component: AuthCapacitorComponent },
  { path: 'show-auth-cordova', component: AuthCordovaComponent },
  { path: 'geo-plugin', component: GeolocationComponent },
  { path: 'accel-plugin', component: AccelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
