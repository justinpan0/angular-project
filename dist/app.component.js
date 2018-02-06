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
        this.fontcolor = 'Red';
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
        template: "\n        <div class=\"well\">\n        <h3>Example</h3>\n            <input #textbox type=\"text\" ngModel=\"fontcolor\" required>\n            <button (click)=\"logText(textbox.value)\">Update Color</button>\n        <p #part1 class=\"box\" [style.color]=\"fontcolor\">\n            Hello World! \n        </p>\n            <h4>Log <button (click)=\"log=''\">Clear</button></h4>\n            <pre>{{log}}</pre>\n        </div>",
        styles: ['.box {max-width: 450px; padding: 5px; }']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map