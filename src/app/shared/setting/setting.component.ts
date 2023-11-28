import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from 'src/app/auth/services/myservice.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent {
  profileData!: FormGroup;
  profileshowhide = false;
  profilesubmitted = false;
  passwordshowhide = false;
  passwordsubmitted = false;
  changePassword!: FormGroup;


  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.profileData = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: [''],
      role: ['']
    });


    this.changePassword = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      npassword: ['', [Validators.required, Validators.minLength(8)]],
    });

  }



  get f(): { [key: string]: AbstractControl } {
    return this.changePassword.controls;
  }

  onChangePassword(): void {
    this.passwordshowhide = true;
    this.passwordsubmitted = true;
    if (this.changePassword.invalid) {
      this.passwordshowhide = false;
    } else {
      let password = {
        "action": "change-password",
        "current_password": this.changePassword.value.password,
        "password": this.changePassword.value.npassword
      }

    }
  }

}
