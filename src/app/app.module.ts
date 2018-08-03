import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import {NgModule} from '@angular/core';

@NgModule({
    imports: [
         BrowserModule,

         //ProductModule
    ],

    declarations: [
        AppComponent,
        // HeaderComponent, etc
    ],

    bootstrap: [
        AppComponent
    ]

})
export class AppModule {

}