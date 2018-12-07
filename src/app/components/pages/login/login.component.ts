import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AuthModel } from 'src/app/models/auth.model';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authenticationService: AuthenticationService,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    });
    this.returnUrl = '/';

    this.authenticationService.logout();
  }

  get form() { return this.loginForm.controls; }

  onSubmit() {
    if (!this.loginForm.invalid) {
      this.loading = true;

      const authModel: AuthModel = {
        login: this.form.login.value,
        senha: this.form.senha.value
      };

      this.authenticationService.login(authModel)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate([this.returnUrl]);
          },
          error => {
            this.loading = false;
            this.snackBar.open('Login inválido', 'Ok', { duration: 2000 });
        });
    } else {
      this.form.login.markAsDirty();
      this.form.senha.markAsDirty();
    }
  }
}
