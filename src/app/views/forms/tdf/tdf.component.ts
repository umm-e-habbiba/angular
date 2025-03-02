import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../../user';
@Component({
  selector: 'app-tdf',
  imports: [CommonModule, FormsModule],
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.scss',
})
export class TdfComponent {
  topics = ['Angular', 'React', 'Next'];
  userModel = new User('ume', 'ume@gmail.com', 123, '', 'am', false);
}
