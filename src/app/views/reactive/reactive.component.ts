import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reactive',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss',
})
export class ReactiveComponent {
  // constructor(private formBuilder: FormBuilder) {}

  formBuilder = inject(FormBuilder);
  // formControls via formBuilder service
  regForm = this.formBuilder.group({
    userName: ['ume habiba'],
    password: [''],
    confirmPassword: [''],
    address: this.formBuilder.group({
      city: [''],
      country: [''],
    }),
  });

  // regForm = new FormGroup({
  //   userName: new FormControl('ume'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     country: new FormControl(''),
  //   }),
  // });
  loadApiData() {
    // this.regForm.setValue({ //setValue will strictly follow the structure of formGroup, means you have to pass all values
    //   userName: 'ume',
    //   password: 'xyz',
    //   confirmPassword: 'xyz',
    //   address: {
    //     city: 'Taxila',
    //     country: 'Pakistan',
    //   },
    // });
    this.regForm.patchValue({
      // if you don't want to pass all values, then you have to use patchValue
      userName: 'ume',
      password: 'xyz',
      confirmPassword: 'xyz',
      // address: {
      //   city: 'Taxila',
      //   country: 'Pakistan',
      // },
    });
  }
}
