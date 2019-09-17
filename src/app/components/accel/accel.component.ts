import { Component, NgZone, AfterViewInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Observable } from 'rxjs';

const { Motion } = Plugins;

@Component({
  selector: 'app-accel',
  templateUrl: './accel.component.html',
  styleUrls: ['./accel.component.scss']
})
export class AccelComponent {
  public accel = {x: '', y: '', z: '', a: '', b: ''};

  public watchAccel(): void {
    const watchListener = Motion.addListener('accel', (values) => {
      this.zone.run(() => {
        const v = {
          x: values.acceleration.x.toFixed(4),
          y: values.acceleration.y.toFixed(4),
          z: values.acceleration.z.toFixed(4),
          a: values.rotationRate.alpha.toFixed(4),
          b: values.rotationRate.beta.toFixed(4),
        };
        this.accel = v;
      });
    });
  }
  constructor(private zone: NgZone) {}

}
