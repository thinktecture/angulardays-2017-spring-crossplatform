import {Observable, Observer} from 'rxjs/Rx';
import {ICameraService} from './camera';

declare var window: any;

export class MobileCameraService implements ICameraService {
    public getPhoto(): Observable<string> {
        return Observable.create((observer: Observer<string>) => {
            const camera = window.navigator.camera;

            const options = {
                quality: 100,
                destinationType: camera.DestinationType.DATA_URL,
                sourceType: camera.PictureSourceType.CAMERA,
                encodingType: camera.EncodingType.PNG,
                saveToPhotoAlbum: false,
                correctOrientation: true,
                allowEdit: true,
                targetWidth: 500,
                targetHeight: 500
            };

            camera.getPicture(imageSrc => {
                observer.next('data:image/png;base64,' + imageSrc);
                observer.complete();
            }, error => {
                observer.error(error);
                observer.complete();
            }, options);
        });
    }
}
