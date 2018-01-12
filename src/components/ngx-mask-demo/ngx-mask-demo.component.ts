import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'ngx-mask-demo',
    templateUrl: 'ngx-mask-demo.component.html',
    styleUrls: ['ngx-mask-demo.component.css']
})
export class NgxMaskDemoComponent {

    zipCode = '';

    constructor() {
    }

    onClickCheck(form: FormControl): void {
        const message = form.invalid ? 'INVALID' : 'VALID';
        alert(message);
    }
}