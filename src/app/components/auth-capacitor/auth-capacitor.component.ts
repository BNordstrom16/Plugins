import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FingerPrintAuth } from 'capacitor-fingerprint-auth';

@Component({
  selector: 'app-auth-capacitor',
  templateUrl: './auth-capacitor.component.html',
  styleUrls: ['./auth-capacitor.component.scss']
})
export class AuthCapacitorComponent {
  public face: boolean;
  public didWork = false;
  public authData: boolean;
  public auth: FingerPrintAuth;

  public async isAvailable(): Promise<void> {
    await this.auth.available().then(result => {
      console.log(result);
    });
  }

  public async verify(): Promise<void> {
    try {
      await this.auth.verify();
    } catch (e) {
      console.log(e);
    }
  }

  public async verifyWithFallback(): Promise<void> {
    try {
      this.auth.verifyWithFallback();
    } catch (e) {
      console.log(e);
    }
  }

  constructor() {
    this.auth = new FingerPrintAuth();
  }
}
