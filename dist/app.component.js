"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.fontcolor = 'lightgreen';
        this.log = '';
    }
    AppComponent.prototype.logText = function (value) {
        this.fontcolor = value;
        this.log += "Text changed to '" + this.fontcolor + "'\n";
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n        <style>\n            button {\n                background-color: #4CAF50; border: none; \n                color: white; \n                padding: 5px 5px; \n                text-align: center; text-decoration: none;\n                display: inline-block;font-size: 12px;\n            }\n            profile-page {\n                margin: 0 0 0 55px; width: auto; \n                font-family: helvetica, arial, sans-serif; \n                line-height: 1.2em;\n            }\n        </style>\n        <div class=\"well profile-page\">\n        <p>Example</p>\n            <input #textbox type=\"text\" ngModel=\"fontcolor\" required>\n            <button class='button' (click)=\"logText(textbox.value)\">Update Color</button>\n        <h1 #part1 class=\"box\" [style.color]=\"fontcolor\">\n            Hello World! \n        </h1>\n            <p>Log <button (click)=\"log=''\">Clear</button></p>\n            <pre>{{log}}</pre>\n        </div>",
        styles: ['box {max-width: 450px; padding: 5px; }' +
                'profile-page {margin: 0 0 0 55px; width: auto; font-family: helvetica, arial, sans-serif; line-height: 1.2em;' +
                'profile-left {width: 925px;float: left;' +
                'h1 {height: 55px; line-height: 55px; text-transform: uppercase; font-size: 15px; font-weight: 700; padding-left: 30px;}' +
                'button {background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center;text-decoration: none;display: inline-block;font-size: 16px;']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map