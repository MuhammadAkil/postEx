import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from 'src/app/auth/services/myservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  profileData!: FormGroup;
  profileshowhide = false;
  profilesubmitted = false;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.profileData = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: [''],
      role: ['']
    });
  }

  get f1(): { [key: string]: AbstractControl } {
    return this.profileData.controls;
  }
  onPictureChange(event: any) {
    if (event.target.files.length > 0) {
      var file = event.target.files[0];

      var filesize = 0;
      myNumber: filesize = Number(file.size);
      filesize = Number(((filesize / 1024) / 1024).toFixed(4));
      if (filesize < 10) {
        this.readFile(file, (e: any) => {
          var pic: any = document.getElementById("blah");
          pic.src = e.target.result;
          var profileData = new FormData();
          profileData.append("action", "update-profilepicture");
          profileData.append("name", file.name);
          profileData.append("file", file, file.name);
          // this.auth.patch('user/image', profileData).subscribe({
          //   next: (res: any) => {
          //     if (res.status == 200) {
          //       // this.auth.validateToken();
          //       // this.ms.showResponse(res.data.message, res.status, 'success')
          //     }
          //   }, error: () => {
          //   },
          // })
        });


      } else {
        // this.ms.showResponse("File must be less than 10 MB.", '', 'warning')
      }
    }
  }

  readFile(file: any, onLoadCallback: any) {
    var reader = new FileReader();
    reader.onload = onLoadCallback;
    reader.readAsDataURL(file);
  }

  onProfileChange() {
    this.profilesubmitted = true;
    this.profileshowhide = true;
    if (this.profileData.invalid) {
      this.profileshowhide = false;
      return
    }

    let person = {
      "action": "update-details",
      "first_name": this.profileData.value.first_name,
      "last_name": this.profileData.value.last_name
    }
    // this.auth.patch('user', person).subscribe({
    //   next: (res: any) => {
    //     if (res.status == 200) {
    //       var userforheader: any = localStorage.getItem('userdata');
    //       userforheader = userforheader ? JSON.parse(userforheader) : '';
    //       userforheader.first_name = this.profileData.value.first_name;
    //       userforheader.last_name = this.profileData.value.last_name;
    //       // localStorage.setItem('userdata', JSON.stringify(userforheader));
    //       // this.ms.showResponse(res.data.message, res.status, 'success')
    //     }
    //     this.profilesubmitted = false;
    //     this.profileshowhide = false;
    //   }, error: () => {
    //     this.profilesubmitted = false;
    //     this.profileshowhide = false;
    //   }
    // })
  }
}
