import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// bootstrap angular module into browser

// Step 2
platformBrowserDynamic()
    .bootstrapModule(AppModule);