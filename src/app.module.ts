import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import * as Material from '@angular/material';
import '@angular/material/prebuilt-themes/indigo-pink.css';

import './app.style.css';
import { AppComponent } from './components/app/app.component';
import { NgxMaskDemoComponent } from './components/ngx-mask-demo/ngx-mask-demo.component';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        Material.MatToolbarModule,
        Material.MatCardModule,
        Material.MatButtonModule,
        Material.MatFormFieldModule,
        Material.MatInputModule,
        NgxMaskModule.forRoot() // ngx-mask
    ],
    declarations: [
        AppComponent,
        NgxMaskDemoComponent
    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl }
    ]
})
export class AppModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}