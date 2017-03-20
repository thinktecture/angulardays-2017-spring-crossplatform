import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserXhr, HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {RootComponent} from './components/root/root';
import {ROUTES} from './routes';
import {HomeComponent} from './components/home/home';
import {HeaderComponent} from './components/header/header';
import {MenuComponent} from './components/menu/menu';
import {WindowRef} from './services/windowRef';
import {StarWarsListComponent} from './components/list/starWarsList';
import {StarWarsService} from './services/starWars';
import {StarWarsDetailComponent} from './components/detail/starWarsDetail';
import {PokemonListComponent} from './components/list/pokemonList';
import {PokemonDetailComponent} from './components/detail/pokemonDetail';
import {PokemonService} from './services/pokemon';
import {PlatformService} from './services/platform';
import {NgProgressCustomBrowserXhr, NgProgressModule} from 'ng2-progressbar';
import {NgxElectronModule} from 'ngx-electron';
import {DesktopIntegrationService} from './services/desktopIntegration';
import {MirrorComponent} from './components/mirror/mirror';
import {CameraService, cameraServiceFactory} from './services/camera';

@NgModule({
  declarations: [
    RootComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    StarWarsListComponent,
    StarWarsDetailComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    MirrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    NgProgressModule,
    NgxElectronModule
  ],
  bootstrap: [RootComponent],
  providers: [
    WindowRef,
    StarWarsService,
    PokemonService,
    PlatformService,
    DesktopIntegrationService,
    { provide: BrowserXhr, useClass: NgProgressCustomBrowserXhr },
    {
      provide: CameraService, useFactory: cameraServiceFactory, deps: [PlatformService]
    }
  ]
})
export class AppModule {
}
