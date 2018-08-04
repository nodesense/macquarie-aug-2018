import { ProductModule } from './product/product.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import {NgModule} from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from './shared/shared.module';



import {FormsModule} from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';

import {HttpClientModule} from '@angular/common/http';

// Step 1: Configuration, map url to component
import {Routes, RouterModule} from '@angular/router';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];


@NgModule({
    imports: [
         BrowserModule, // refers to CommonModule, Compiler
         FormsModule,
         // Step 2: Apply route config to Angular
         // forRoot, create and return a module
         RouterModule.forRoot(routes),

         SharedModule,
        ProductModule,
        HttpClientModule
    ],

    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        NotFoundComponent
    ],

    bootstrap: [
        // Step 3 
        AppComponent
    ]

})
export class AppModule {

}