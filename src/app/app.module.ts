import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplayoutComponent } from './layout/applayout/applayout.component';
import { HeaderComponent } from './modules/header/header.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { FooterComponent } from './modules/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SitelayoutComponent } from './layout/sitelayout/sitelayout.component';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';




const dbConfig: DBConfig = {
  name: 'MyDatabase',
  version: 8,
  objectStoresMeta: [
    {
      store: 'Todos',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'todo', keypath: 'todo', options: { unique: false } },
        { name: 'userId', keypath: 'userId', options: { unique: false } },
      ],
    },
    {
      store: 'users',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'email', keypath: 'email', options: { unique: true } },
        { name: 'password', keypath: 'password', options: { unique: false } },
        { name: 'name', keypath: 'name', options: { unique: false } },
      ],
    },
  ],
};

@NgModule({
  declarations: [
    AppComponent,
    ApplayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    SitelayoutComponent,


  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIndexedDBModule.forRoot(dbConfig)



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
