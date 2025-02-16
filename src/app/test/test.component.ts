import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-test',
  imports: [FormsModule],
  // templateUrl: './test.component.html',
  template: `
    <button (click)="onClick()">Greet</button>
    <button (click)="greetings = 'welcome ume'">Greet</button>
    {{ greetings }}
    <h3>========</h3>
    <h2>Two way data-binding</h2>
    <input [(ngModel)]="name" type="text" />

    {{ name }}
  `,
  styleUrl: './test.component.scss',
})
export class TestComponent {
  public greetings = '';
  onClick() {
    console.log('Button clicked');
    this.greetings = 'hello, Welcome...';
  }
  ////// two way data binding
  public name = '';
}
