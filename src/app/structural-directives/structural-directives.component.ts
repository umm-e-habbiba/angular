import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-structural-directives',
  imports: [CommonModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.scss',
})
export class StructuralDirectivesComponent {
  public displayName = false;
  public color = 'orange';
  public colors = ['red', 'green', 'orange', 'blue', 'yellow'];
}
