import {Component, NgZone} from '@angular/core';
import {CameraService} from '../../services/camera';

@Component({
  selector: 'app-mirror',
  templateUrl: 'mirror.html',
  styleUrls: ['mirror.scss']
})
export class MirrorComponent {
  public photo: any;

  constructor(private _camera: CameraService, private _zone: NgZone) {
  }

  public takePhoto() {
    this._camera.getPhoto()
      .subscribe(photo => {
        this._zone.run(() => {
          this.photo = photo;
        });
      });
  }
}
