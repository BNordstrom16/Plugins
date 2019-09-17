import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';
import { AuthCapacitorComponent } from './auth-capacitor/auth-capacitor.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { AccelComponent } from './accel/accel.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  DateAdapter,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatBottomSheetModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldDefaultOptions,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatOptionModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSnackBarModule,
  MatButton,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    AuthCapacitorComponent,
    GeolocationComponent,
    AccelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
