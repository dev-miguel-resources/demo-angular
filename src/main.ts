import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// generar el arranque dinámico de la app
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
