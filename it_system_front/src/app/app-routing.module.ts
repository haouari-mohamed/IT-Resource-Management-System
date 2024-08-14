import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './compenents/login/login/login.component'; 
import { TechnicianComponent } from './compenents/technician/technician.component'; 
import { UserComponent } from './compenents/user/user.component'; 
import { DashboardComponent } from './compenents/login/dashboard/dashboard.component';
 

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'tech', component: TechnicianComponent },
  { path: 'use', component: UserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
