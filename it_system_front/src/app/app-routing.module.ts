import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './compenents/login/login/login.component'; 
import { TechnicianComponent } from './compenents/technician/technician.component'; 
import { UserComponent } from './compenents/user/user.component'; 
import { DashboardComponent } from './compenents/login/dashboard/dashboard.component';
import { EquipmentListComponent } from './compenents/login/dashboard/equipment-list/equipment-list.component';
import { CreateEquipmentComponent } from './compenents/login/dashboard/create-equipment/create-equipment.component';
import { TicketListComponent } from './compenents/login/dashboard/ticket-list/ticket-list.component';
import { CreateBreakdownComponent } from './compenents/login/dashboard/create-breakdown/create-breakdown.component';
import { BreakdownListComponent } from './compenents/login/dashboard/breakdown-list/breakdown-list.component';
import { UserListComponent } from './compenents/login/dashboard/user-list/user-list.component';
import { CreateUserComponent } from './compenents/login/dashboard/create-user/create-user.component';
 

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'tech', component: TechnicianComponent },
  { path: 'use', component: UserComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'listequip', component: EquipmentListComponent},
  {path: 'createequip', component: CreateEquipmentComponent},
  {path: 'ticketlist', component: TicketListComponent},
  {path: 'panne', component: CreateBreakdownComponent},
  {path: 'pannelist', component: BreakdownListComponent},
  {path: 'userlist', component: UserListComponent},
  {path: 'createuser', component: CreateUserComponent},
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
