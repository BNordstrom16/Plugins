import { Component, AfterViewInit } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';


@Component({
  selector: 'app-auth-cordova',
  templateUrl: './auth-cordova.component.html',
  styleUrls: ['./auth-cordova.component.scss']
})
export class AuthCordovaComponent implements AfterViewInit {
  public faio: FingerprintAIO;

  public ngAfterViewInit(): void {
    this.faio = new FingerprintAIO();
  }

  public check(): void {
    this.faio.isAvailable().then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    });
  }

  public show(): void {
    this.faio.show({
      clientId: 'test-dummy',
      clientSecret: '1234567910abcdefg',
      localizedFallbackTitle: 'this is working',
      localizedReason: 'authenticate PLS'
    }).then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    });
  }
}
