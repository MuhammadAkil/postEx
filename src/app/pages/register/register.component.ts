
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/auth/services/myservice.service';

@Component({
  selector: 'app-registor',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registrationForm: FormGroup;
  registrationError: string | null = null;
  showSuccess: boolean = false;

  showSuccessAlert() {
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 3000);
  }

  dismissAlert() {
    this.showSuccess = false;
  }
  constructor(private todoService: MyserviceService, private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  registerUser() {
    const email = this.registrationForm.value.email;
    const password = this.registrationForm.value.password;
    let name = this.registrationForm.value.name
    this.todoService.registerUser(email, password, name)
    this.showSuccessAlert()
    this.router.navigate(['/home']);
  }


}