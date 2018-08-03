import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import {NgModule} from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
    imports: [
         BrowserModule,

         //ProductModule
    ],

    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        // HeaderComponent, etc
    ],

    bootstrap: [
        // Step 3 
        AppComponent
    ]

})
export class AppModule {

}