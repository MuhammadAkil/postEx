import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitelayoutComponent } from './layout/sitelayout/sitelayout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ApplayoutComponent } from './layout/applayout/applayout.component';
import { HomeComponent } from './shared/home/home.component';
import { SettingComponent } from './shared/setting/setting.component';
import { NotfoundComponent } from './modules/notfound/notfound.component';
import { ChartComponent } from './shared/chart/chart.component';
import { InvoiceComponent } from './shared/invoice/invoice.component';
import { TodoComponent } from './shared/todo/todo.component';
// import { authGuard } from './auth/auth.guard';


const routes: Routes = [

  {
    path: '',
    component: SitelayoutComponent,
    children: [
      { path: '', component: LoginComponent, data: { title: 'Login' } },
      {
        path: 'register', component: RegisterComponent, data: { title: 'Register' },
        // canActivate: [authGuard],
      },
      { path: 'login', component: LoginComponent, data: { title: 'Login' } },

    ],

  },
  {
    path: '',
    component: ApplayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Home' },
      },
      {
        path: 'invoice',
        component: InvoiceComponent,
        data: { title: 'Invoice' },
      },
      {
        path: 'todos',
        component: TodoComponent,
        data: { title: 'Todos' },
      },
      {
        path: 'settings',
        component: SettingComponent,
        data: { title: 'Settings' },
      },
      {
        path: 'chart',
        component: ChartComponent,
        data: { title: 'Chart' },
      },
    ],
  },

  {
    path: '404',
    component: NotfoundComponent
  },
  { path: '**', redirectTo: '/404' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
