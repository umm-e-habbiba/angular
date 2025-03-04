import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../../user';
import { HttpClientModule } from '@angular/common/http';
import { SubmitFormService } from '../../../submit-form.service';
@Component({
  selector: 'app-tdf',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.scss',
})
export class TdfComponent {
  topics = ['Angular', 'React', 'Next'];
  success = false;
  error = false;
  loading = false;
  userModel = new User('ume', 'ume@gmail.com', 1234567890, '', 'am', false);
  constructor(private _form: SubmitFormService) {}
  onSubmit() {
    this.loading = true;
    this._form.submit(this.userModel).subscribe(
      (data) => {
        console.log(data);
        this.success = true;
        this.loading = false;
        setTimeout(() => {
          this.success = false;
        }, 3000);
      },
      (error) => {
        console.log('error!', error);
        this.error = true;
        this.loading = false;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
    );
  }
}
