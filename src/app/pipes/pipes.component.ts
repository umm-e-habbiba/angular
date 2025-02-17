import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss',
})
export class PipesComponent {
  public name = 'Ume Habiba';
  public message = 'Learning angular basics';
  public person = {
    fName: 'ume',
    lName: 'habiba',
  };
  public date = new Date();
}
