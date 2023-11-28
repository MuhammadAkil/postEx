import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/auth/services/myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  showSuccess: boolean = false;
  showError: boolean = false;
  success: boolean = false;
  confirmError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private todoService: MyserviceService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  dismissAlert() {
    if (this.showSuccess) {
      this.showSuccess = false;
    } else {
      this.success = false
    }
  }
  showSuccessAlert() {
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 10000);
  }

  loginSuccessAlert() {
    this.success = false;
    setTimeout(() => {
      this.showError = true;
    }, 10000);
  }

  showErrorAlert() {
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
    }, 10000);
  }
  showAuth = false;
  showAuthAlert() {
    this.showAuth = true;
    setTimeout(() => {
      this.showAuth = false;
    }, 10000);
  }

  login() {
    this.submitted = true;
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.todoService.loginUser(email, password).subscribe({
        next: (isAuthenticated: any) => {
          if (isAuthenticated) {
            this.todoService.setLoginStatus(true);
            this.loginSuccessAlert();
            const currentUserId = this.todoService.getCurrentUserId();
            if (currentUserId !== null) {
              this.todoService.getTodoListByUser(currentUserId).subscribe(() => {
                this.route.navigate(['/home']);
              });
            }
          }
          else {
            this.showErrorAlert();
          }
        },
        error: () => {
          this.showErrorAlert();
        },
      });
    }
  }
}
