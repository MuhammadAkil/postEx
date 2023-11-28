import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChartComponent } from './chart/chart.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from '../modules/notfound/notfound.component';
import { SettingComponent } from './setting/setting.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { BarchartComponent } from './chart/barchart/barchart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { PiechartComponent } from './chart/piechart/piechart.component';
import { DonatchartComponent } from './chart/donatchart/donatchart.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileComponent } from './setting/profile/profile.component';
import { NewpasswordComponent } from './setting/newpassword/newpassword.component';
import { TodoComponent } from './todo/todo.component';




@NgModule({
  declarations: [
    HomeComponent,
    ChartComponent,
    SettingComponent,
    NotfoundComponent,
    BarchartComponent,
    LinechartComponent,
    PiechartComponent,
    DonatchartComponent,
    InvoiceComponent,
    ProfileComponent,
    NewpasswordComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
