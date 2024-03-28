import { Component } from '@angular/core';
import { LoginDTO } from '../../models/auth';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model = new LoginDTO();
  errorMessage = "";

  constructor(
    private as: AuthService,
    private router: Router
  ) { }

  login() {
    this.as.login(this.model)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error;
          return of(undefined);
        })
      )
      .subscribe(user => {
        if (user) {
          this.router.navigate([""]);
        }
      })
  }
}
