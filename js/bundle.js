!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/js",e(e.s=7)}([function(t,e){t.exports=vendor_library},function(t,e,n){t.exports=n(0)(2)},function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"b",function(){return a}),n.d(e,"a",function(){return i}),n.d(e,"d",function(){return s});var r=n(1),o=new r.InjectionToken("config"),a=new r.InjectionToken("NEW_CONFIG"),i=new r.InjectionToken("INITIAL_CONFIG"),s={clearIfNotMatch:!1,dropSpecialCharacters:!0,specialCharacters:["/","(",")",".",":","-"," ","+"],patterns:{0:{pattern:new RegExp("\\d")},9:{pattern:new RegExp("\\d"),optional:!0},A:{pattern:new RegExp("[a-zA-Z0-9]")},S:{pattern:new RegExp("[a-zA-Z]")}}}},function(t,e,n){t.exports=n(0)(209)},function(t,e,n){t.exports=n(0)(210)},function(t,e,n){t.exports=n(0)(21)},function(t,e,n){t.exports=n(0)(7)},function(t,e,n){t.exports=n(8)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),o=(n.n(r),n(10)),a=(n.n(o),n(1)),i=n(11),s=n(12);Object(a.enableProdMode)();Object(i.platformBrowserDynamic)().bootstrapModule(s.a)},function(t,e,n){t.exports=n(0)(212)},function(t,e,n){t.exports=n(0)(493)},function(t,e,n){t.exports=n(0)(523)},function(t,e,n){"use strict";function r(){return document.getElementsByTagName("base")[0].href}n.d(e,"a",function(){return m});var o=n(1),a=n(5),i=n(13),s=n(14),c=n(15),p=n(18),u=n(19),l=(n.n(u),n(20)),f=(n.n(l),n(23)),h=n(28),d=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},m=function(){function t(){}return t=d([Object(o.NgModule)({bootstrap:[f.a],imports:[i.BrowserModule,s.BrowserAnimationsModule,a.FormsModule,p.MatToolbarModule,p.MatCardModule,p.MatButtonModule,p.MatFormFieldModule,p.MatInputModule,c.a.forRoot()],declarations:[f.a,h.a],providers:[{provide:"BASE_URL",useFactory:r}]})],t)}()},function(t,e,n){t.exports=n(0)(29)},function(t,e,n){t.exports=n(0)(204)},function(t,e,n){"use strict";function r(t,e){return"function"==typeof e?e():c({},t,e)}n.d(e,"a",function(){return p});var o=n(1),a=n(6),i=n(16),s=n(2),c=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},p=function(){function t(){}return t.forRoot=function(e){return{ngModule:t,providers:[{provide:s.b,useValue:e},{provide:s.a,useValue:s.d},{provide:s.c,useFactory:r,deps:[s.a,s.b]}]}},t.decorators=[{type:o.NgModule,args:[{imports:[a.CommonModule],exports:[i.a],declarations:[i.a]}]}],t.ctorParameters=function(){return[]},t}()},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(1),o=n(5),a=n(17),i=(n(2),Promise.resolve(null)),s=function(){function t(t,e,n){this._elementRef=t,this._renderer=e,this._maskService=n}return t.prototype.ngOnInit=function(){var t=this;i.then(function(){return t._maskService.applyValueChanges(t._elementRef.nativeElement)})},Object.defineProperty(t.prototype,"maskExpression",{set:function(t){try{this._maskValue=JSON.parse(t)}catch(e){this._maskValue=t}this._maskValue&&(this._maskService.maskExpression=this._maskValue)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"specialCharacters",{set:function(t){t&&Array.isArray(t)&&(!Array.isArray(t)||t.length)&&(this._maskService.maskSpecialCharacters=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"patterns",{set:function(t){t&&(this._maskService.maskAvailablePatterns=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dropSpecialCharacters",{set:function(t){this._maskService.dropSpecialCharacters=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"clearIfNotMatch",{set:function(t){this._maskService.clearIfNotMatch=t},enumerable:!0,configurable:!0}),t.prototype.onInput=function(t){if(this._maskValue){var e=t.target,n=e.selectionStart,r=0;this._maskService.applyValueChanges(this._elementRef.nativeElement,n,function(t){return r=t}),e.selectionStart=e.selectionEnd=n+("deleteContentBackward"===t.inputType?0:r)}},t.prototype.onBlur=function(){this._maskService.clearIfNotMatchFn(this._elementRef.nativeElement),this._maskService.applyValueChanges(this._elementRef.nativeElement),this._maskService.onTouch()},t.prototype.writeValue=function(t){this._elementRef.nativeElement.value=this._maskService.applyMask(t,this._maskService.maskExpression),this._maskService.applyValueChanges(this._elementRef.nativeElement)},t.prototype.registerOnChange=function(t){this._maskService.onChange=t},t.prototype.registerOnTouched=function(t){this._maskService.onTouch=t},t.prototype.setDisabledState=function(t){return t?this._renderer.setAttribute(this._elementRef.nativeElement,"disabled","true"):this._renderer.removeAttribute(this._elementRef.nativeElement,"disabled")},t.decorators=[{type:r.Directive,args:[{selector:"[mask]",providers:[{provide:o.NG_VALUE_ACCESSOR,useExisting:Object(r.forwardRef)(function(){return t}),multi:!0},a.a]}]}],t.ctorParameters=function(){return[{type:r.ElementRef},{type:r.Renderer2},{type:a.a}]},t.propDecorators={maskExpression:[{type:r.Input,args:["mask"]}],specialCharacters:[{type:r.Input}],patterns:[{type:r.Input}],dropSpecialCharacters:[{type:r.Input}],clearIfNotMatch:[{type:r.Input}],onInput:[{type:r.HostListener,args:["input",["$event"]]}],onBlur:[{type:r.HostListener,args:["blur"]}]},t}()},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(1),o=n(2),a=n(6),i=function(){function t(t,e){this.document=t,this._config=e,this.maskExpression="",this.onChange=function(t){},this.onTouch=function(){},this._shift=new Set,this.clearIfNotMatch=this._config.clearIfNotMatch,this.dropSpecialCharacters=this._config.dropSpecialCharacters,this.maskSpecialCharacters=this._config.specialCharacters,this.maskAvailablePatterns=this._config.patterns,this._regExpForRemove=new RegExp(this.maskSpecialCharacters.map(function(t){return"\\"+t}).join("|"),"gi")}return t.prototype.applyMask=function(t,e,n,r){if(void 0===n&&(n=0),void 0===r&&(r=function(){}),void 0===t||null===t)return"";for(var o=0,a="",i=t.toString().split(""),s=0,c=i[0];s<i.length&&a.length!==e.length;s++,c=i[s])this._checkSymbolMask(c,e[o])?(a+=c,o++):-1!==this.maskSpecialCharacters.indexOf(e[o])?(a+=e[o],o++,this._shift.add(o),s--):this.maskSpecialCharacters.indexOf(c)>-1&&this.maskAvailablePatterns[e[o]]&&this.maskAvailablePatterns[e[o]].optional&&(o++,s--);a.length+1===e.length&&-1!==this.maskSpecialCharacters.indexOf(e[e.length-1])&&(a+=e[e.length-1]);for(var p=1,u=n+1;this._shift.has(u);)p++,u++;return r(this._shift.has(n)?p:0),a},t.prototype.applyValueChanges=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=function(){});var r=t.value,o=this.applyMask(r,this.maskExpression,e,n);t.value=o,!0===this.dropSpecialCharacters?this.onChange(this._removeMask(o)):this.onChange(o),t!==this.document.activeElement&&this.clearIfNotMatchFn(t)},t.prototype.clearIfNotMatchFn=function(t){!0===this.clearIfNotMatch&&this.maskExpression.length!==t.value.length&&(t.value="")},t.prototype._removeMask=function(t){return t?t.replace(this._regExpForRemove,""):t},t.prototype._checkSymbolMask=function(t,e){return t===e||this.maskAvailablePatterns[e]&&this.maskAvailablePatterns[e].pattern&&this.maskAvailablePatterns[e].pattern.test(t)},t.decorators=[{type:r.Injectable}],t.ctorParameters=function(){return[{type:void 0,decorators:[{type:r.Inject,args:[a.DOCUMENT]}]},{type:void 0,decorators:[{type:r.Inject,args:[o.c]}]}]},t}()},function(t,e,n){t.exports=n(0)(495)},function(t,e,n){t.exports=n(0)(206)},function(t,e,n){var r=n(21);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){var r=n(22);"string"==typeof r&&(r=[[t.i,r,""]]);var o={};o.transform=void 0;n(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(3)(void 0),e.push([t.i,"body{margin:0}",""])},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(1),o=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t=o([Object(r.Component)({selector:"app",template:n(24),styles:[n(25)]}),a("design:paramtypes",[])],t)}()},function(t,e){t.exports='<mat-toolbar color="primary">\r\n    <h1>Application</h1>\r\n</mat-toolbar>\r\n\r\n<div class="main-contents">\r\n\r\n    <ngx-mask-demo></ngx-mask-demo>\r\n\r\n</div>'},function(t,e,n){var r=n(26);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){var r=n(27);"string"==typeof r&&(r=[[t.i,r,""]]);var o={};o.transform=void 0;n(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(3)(void 0),e.push([t.i,".main-contents{padding:24px}",""])},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(1),o=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){this.zipCode=""}return t.prototype.onClickCheck=function(t){var e=t.invalid?"INVALID":"VALID";alert(e)},t=o([Object(r.Component)({selector:"ngx-mask-demo",template:n(29),styles:[n(30)]}),a("design:paramtypes",[])],t)}()},function(t,e){t.exports='<form #form1="ngForm" (ngSubmit)="onClickCheck(form1)">\r\n    <mat-card>\r\n        <mat-card-title>ngx-mask</mat-card-title>\r\n        <mat-card-content>\r\n            <div>\r\n                <mat-form-field>\r\n                    <input name="zipCode" required pattern="\\d{3}-\\d{4}" matInput placeholder="Zip code" [(ngModel)]="zipCode" mask="000-0000"\r\n                        dropSpecialCharacters="false">\r\n                    <mat-hint align="start">format: 000-0000</mat-hint>\r\n                </mat-form-field>\r\n                <span>Model value is: [{{zipCode}}]</span>\r\n            </div>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button mat-button>SUBMIT</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</form>'},function(t,e,n){var r=n(31);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){var r=n(32);"string"==typeof r&&(r=[[t.i,r,""]]);var o={};o.transform=void 0;n(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(3)(void 0),e.push([t.i,"",""])}]);
//# sourceMappingURL=bundle.js.map