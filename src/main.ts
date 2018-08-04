import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// bootstrap angular module into browser

// Step 2
platformBrowserDynamic()
    .bootstrapModule(AppModule);

// JIT - Just in Time Compilation, good for development, debug
// Convert HTML view to JS code, where? at browser
// Cons - Time to compile html, delay loading of pages


// AoT - Ahead of Time 
// Convert HTML to JS, where? at build machine
// ng build --prod     