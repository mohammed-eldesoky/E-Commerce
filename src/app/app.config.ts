import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

 import {provideToastr} from 'ngx-toastr';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
export const appConfig: ApplicationConfig = {
  providers: [ 
    provideAnimations(),
    provideToastr(), 
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()),provideHttpClient(withFetch()),importProvidersFrom( RouterModule ,BrowserAnimationsModule) ]
};
// function provideToastr(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
//   throw new Error('Function not implemented.');
// }

