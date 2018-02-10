import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <style>
            button {
                background-color: #4CAF50; border: none; 
                color: white; 
                padding: 5px 5px; 
                text-align: center; text-decoration: none;
                display: inline-block;font-size: 12px;
            }
            profile-page {
                margin: 0 0 0 55px; width: auto; 
                font-family: helvetica, arial, sans-serif; 
                line-height: 1.2em;
            }
        </style>
        <div class="well profile-page">
        <p>Example</p>
            <input (keyup)="setColor($event)" required>
        <h1 #part1 class="box" [style.color]="fontcolor">
            Hello World!
        </h1>
        </div>`,
    styles: ['box {max-width: 450px; padding: 5px; }' +
    'profile-page {margin: 0 0 0 55px; width: auto; font-family: helvetica, arial, sans-serif; line-height: 1.2em;' +
    'profile-left {width: 925px;float: left;' +
    'h1 {height: 55px; line-height: 55px; text-transform: uppercase; font-size: 15px; font-weight: 700; padding-left: 30px;}' +
    'button {background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center;text-decoration: none;display: inline-block;font-size: 16px;']
})
export class AppComponent {

    fontcolor = 'green';

    setColor(event: KeyboardEvent): void {
        this.fontcolor = (<HTMLInputElement>event.target).value;
    }
}