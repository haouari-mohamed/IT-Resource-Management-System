import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { LoginComponent } from './compenents/login/login/login.component'; 
import { UserComponent } from './compenents/user/user.component'; 
import { TechnicianComponent } from './compenents/technician/technician.component'; 

import { DashboardComponent } from './compenents/login/dashboard/dashboard.component';
import { TicketDeSupportService } from './services/ticket-de-support.service';
import { PanneService } from './services/panne.service';
import { EquipementService } from './services/equipement.service';
import { EquipmentListComponent } from './compenents/login/dashboard/equipment-list/equipment-list.component';
import { CreateEquipmentComponent } from './compenents/login/dashboard/create-equipment/create-equipment.component';
import { TicketListComponent } from './compenents/login/dashboard/ticket-list/ticket-list.component';
import { UserListComponent } from './compenents/login/dashboard/user-list/user-list.component';
import { CreateUserComponent } from './compenents/login/dashboard/create-user/create-user.component';

import { BreakdownListComponent } from './compenents/login/dashboard/breakdown-list/breakdown-list.component';
import { CreateBreakdownComponent } from './compenents/login/dashboard/create-breakdown/create-breakdown.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    TechnicianComponent,
    DashboardComponent,
    EquipmentListComponent,
    CreateEquipmentComponent,
    TicketListComponent,
    UserListComponent,
    CreateUserComponent,
    BreakdownListComponent,
    CreateBreakdownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    UserService,
    TicketDeSupportService,
    PanneService,
    EquipementService,
    /* {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }, */
   
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
