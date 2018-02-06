import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="well">
        <h3>Example</h3>
            <input #textbox type="text" ngModel="fontcolor" required>
            <button (click)="logText(textbox.value)">Update Color</button>
        <p #part1 class="box" [style.color]="fontcolor">
            Hello World! 
        </p>
            <h4>Log <button (click)="log=''">Clear</button></h4>
            <pre>{{log}}</pre>
        </div>`,
    styles: ['.box {max-width: 450px; padding: 5px; }']
})
export class AppComponent {

    fontcolor = 'Red';
    log='';

    logText(value: string): void {
        this.fontcolor = value;
        this.log += `Text changed to '${this.fontcolor}'\n`;
    }
}