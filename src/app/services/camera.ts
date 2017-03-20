import {Observable} from 'rxjs/Observable';
import {DesktopCameraService} from './desktopCamera';
import {MobileCameraService} from './mobileCamera';
import {PlatformService} from './platform';

export interface ICameraService {
    getPhoto(): Observable<string>;
}

export abstract class CameraService implements ICameraService {
    public abstract getPhoto(): Observable<string>;
}

export function cameraServiceFactory(platformService: PlatformService): ICameraService {
    if (platformService.isMobileDevice) {
        return new MobileCameraService();
    }

    return new DesktopCameraService();
}
