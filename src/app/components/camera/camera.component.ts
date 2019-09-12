import { Component } from '@angular/core';
import { Plugins, CameraResultType, CameraPhoto, Capacitor } from '@capacitor/core';

const { Camera } = Plugins;

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent {
  public image: CameraPhoto;
  public imageUrl: string;
  public imgData;

  public async takePhoto(): Promise<void> {
    await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    }).then((photo) => {
      this.image = photo;
    });
    this.imageUrl = Capacitor.convertFileSrc(this.image.path);
  }
}
