import { Component } from '@angular/core';
import { Plugins, GeolocationPosition } from '@capacitor/core';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss']
})
export class GeolocationComponent {
  public location: GeolocationPosition;
  public allValues: number[] = [];
  public allProperties: any[] = [];
  public async getLocation() {
    this.location = await Geolocation.getCurrentPosition();

    this.allValues[0] = this.location.coords.latitude;
    this.allValues[1] = this.location.coords.longitude;
    this.allValues[2] = this.location.coords.accuracy;
    this.allValues[3] = this.location.coords.altitudeAccuracy;
    this.allValues[4] = this.location.coords.altitude;
    this.allValues[5] = this.location.coords.speed;
    this.allValues[6] = this.location.coords.heading;
  }
}
