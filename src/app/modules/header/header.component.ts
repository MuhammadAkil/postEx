import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/auth/services/myservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



  constructor(
    private router: Router,
    public todoService: MyserviceService
  ) { }


  ngOnInit(): void {


  }

  logOut() {
    this.todoService.logout();

  }

}
