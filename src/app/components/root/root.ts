import {Component} from '@angular/core';
import {DesktopIntegrationService} from '../../services/desktopIntegration';

@Component({
  selector: 'app-root',
  templateUrl: 'root.html',
  styleUrls: ['root.scss']
})
export class RootComponent {
  constructor(private _desktopIntegration: DesktopIntegrationService) {
    this._desktopIntegration.register();
  }
}
