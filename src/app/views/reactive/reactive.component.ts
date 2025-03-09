import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { forbiddenNameValidator } from '../../shared/user-name.validator';
import { passwordValidator } from '../../shared/password-validator';
@Component({
  selector: 'app-reactive',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss',
})
export class ReactiveComponent implements OnInit {
  // constructor(private formBuilder: FormBuilder) {}

  regForm!: FormGroup;

  get password() {
    return this.regForm.get('password');
  }
  //confirmPassword
  get confirmPassword() {
    return this.regForm.get('confirmPassword');
  }
  //confirmPassword
  get email() {
    return this.regForm.get('email');
  }
  formBuilder = inject(FormBuilder);
  // formControls via formBuilder service
  ngOnInit(): void {
    this.regForm = this.formBuilder.group(
      {
        userName: [
          'ume habiba',
          [Validators.required, forbiddenNameValidator(/admin/)], // custom validation
        ], //in array first one will be the default value, second will be the validation rules
        password: ['', [Validators.required, Validators.minLength(5)]], // for multiple validation rules we add array in second value
        confirmPassword: ['', Validators.required], // simple validation
        email: [''],
        subscribe: [false],
        address: this.formBuilder.group({
          city: [''],
          country: [''],
        }),
      },
      { validator: passwordValidator } //cross-field validation
    );

    //conditional validation
    //valueChanges of every control return an observable so we will subscribe to it
    this.regForm.get('subscribe')?.valueChanges.subscribe((checked) => {
      const email = this.regForm.get('email');
      if (checked) {
        email?.setValidators(Validators.required);
      } else {
        email?.clearValidators();
      }
      email?.updateValueAndValidity();
    });
  }

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
      password: '12345',
      confirmPassword: '12345',
      // address: {
      //   city: 'Taxila',
      //   country: 'Pakistan',
      // },
    });
  }
}
