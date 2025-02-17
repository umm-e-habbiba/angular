import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComponent, StructuralDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hellow-world';
  name: string = 'UME HABIBA';
  message = '';
}
