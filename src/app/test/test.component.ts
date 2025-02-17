import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-test',
  imports: [FormsModule],
  // templateUrl: './test.component.html',
  template: `
    <!-- event binding -->
    <!-- <button (click)="onClick()">Greet</button>
    <button (click)="greetings = 'welcome ume'">Greet</button>
    {{ greetings }} -->
    <!-- event binding ends -->
    <h3>========</h3>
    <div>
      <h2>{{ 'hello ' + userName }}</h2>
      <!-- <p>this username is coming from parent component</p> -->
      <!-- button to fire an event to send data to parent component -->
      <button (click)="fireEvent()">Send Data</button>
    </div>
    <h3>========</h3>
    <!-- two way data -binding -->
    <!-- <h2>Two way data-binding</h2>
    <input [(ngModel)]="name" type="text" />

    {{ name }} -->
    <!-- two way data -binding ends -->
  `,
  styleUrl: './test.component.scss',
})
export class TestComponent {
  @Input() public userName: string; //property coming from parent
  @Output() public childEvent = new EventEmitter();
  fireEvent() {
    this.childEvent.emit(
      `Congrats ${this.userName}!! you sent data from child to parent component`
    );
  }
  constructor() {
    this.userName = '';
  }
  public greetings = '';
  onClick() {
    console.log('Button clicked');
    this.greetings = 'hello, Welcome...';
  }
  ////// two way data binding
  public name = '';
  //
}
