import { Component } from '@angular/core';
import { MyserviceService } from 'src/app/auth/services/myservice.service';

@Component({
  selector: 'app-applayout',
  templateUrl: './applayout.component.html',
  styleUrls: ['./applayout.component.scss']
})
export class ApplayoutComponent {
  constructor() { }

  isSidebarClosed: boolean = false;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }
}
