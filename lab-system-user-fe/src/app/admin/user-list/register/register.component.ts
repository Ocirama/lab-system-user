import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  getMaximumLengthValidationError,
  getMinimumLengthValidationError,
  getPatternValidationError, getUsernameValidationError,
  getValueEmptyValidationError, mapResponseErrors
} from '../../../util/validation.utils';
import {ApiService} from '../../../core/api.service';

const nameMinLength = 3;
const nameMaxLength = 50;
const passwordMinLength = 8;
const passwordMaxLength = 50;

@Component({
  selector: 'app-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any;
  onConfirm: any;

  loading = false;
  error = '';

  userForm: FormGroup;

  formErrors = {
    name: [
      getValueEmptyValidationError('name'),
      getPatternValidationError(`Can contain only uppercase lowercase letters and numbers`),
      getMinimumLengthValidationError(nameMinLength),
      getMaximumLengthValidationError(nameMaxLength)
    ],
    username: [
      getValueEmptyValidationError('username'),
      getUsernameValidationError()
    ],
    password: [
      getValueEmptyValidationError('password'),
      getMinimumLengthValidationError(passwordMinLength),
      getMaximumLengthValidationError(passwordMaxLength),
    ]
  };

  constructor(
    private api: ApiService,
    private router: Router,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<RegisterComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {

    this.userForm = formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(nameMinLength),
        Validators.maxLength(nameMaxLength),
        Validators.pattern(/^[A-Z0-9a-z]+$/)
      ]],
      username: ['', [
        Validators.required,
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(passwordMinLength),
        Validators.maxLength(passwordMaxLength),
        Validators.pattern(/^[A-Z0-9a-z]+$/),
      ]],
      role: ['user', [
        Validators.required,
        Validators.minLength(nameMinLength),
        Validators.maxLength(nameMaxLength),
        Validators.pattern(/^[A-Z0-9a-z]+$/),
      ]]
    });

    if (!data) {
      return;
    }
    this.onConfirm = data.onConfirm;

    if (data.user) {
      this.user = data.user;
      this.userForm.setValue({
        name: this.user.name,
        username: this.user.username,
        password: '',
        role: this.user.role,
      });
    }
  }

  ngOnInit() {
  }

  getError(fieldName: string) {
    for (const error of this.formErrors[fieldName]) {
      if (this.userForm.controls[fieldName].hasError(error.validatorType)) {
        return error.message;
      }
    }
    return '';
  }

  errorResponseHandler(response) {
    this.loading = false;
    if (response.error.validationErrors) {
      mapResponseErrors(
        response.error.validationErrors,
        this.formErrors,
        'backend',
        this.userForm
      );
    } else {
      this.error = 'A network error occurred';
    }
  }

  submit() {
    this.error = '';
    if (this.userForm.status === 'VALID') {
      this.loading = true;
      let observable;

      if (this.user) {
        observable = this.api.put('/lei/users', this.userForm.getRawValue());
      } else {
        observable = this.api.post('/lei/users', this.userForm.getRawValue());
      }

      observable.subscribe(
        (response) => {
          if (this.onConfirm) {
            this.onConfirm(response);
          }
          this.dialogRef.close();
          this.loading = false;
        },
        this.errorResponseHandler.bind(this)
      );
    }
  }
}
