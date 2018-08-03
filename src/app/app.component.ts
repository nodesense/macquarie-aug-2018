import {Component} from '@angular/core';

@Component({
    // name/html tag name
    selector: 'app-root', // <app-root></app-root>
    // View
    templateUrl : 'app.component.html',

    // Scopped style
    styleUrls: [
        'app.component.css'
    ]
})
export class AppComponent {
    // models
    appTitle: string = 'Product App 3';

}