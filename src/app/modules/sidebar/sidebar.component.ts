import { Component, OnInit } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { MyserviceService } from 'src/app/auth/services/myservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isSidebarOpen$: Observable<any> | Subscribable<any> | Promise<any> | undefined;

  constructor(public auth: MyserviceService) { }

  ngOnInit(): void {
  }

  isSidebarVisible = true;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
  isSidebarOpen2 = false
}
