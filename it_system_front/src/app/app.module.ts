import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { TechnicianService } from './services/technician.service';
import { LoginComponent } from './compenents/login/login/login.component'; 
import { UserComponent } from './compenents/user/user.component'; 
import { TechnicianComponent } from './compenents/technician/technician.component'; 

import { AdminService } from './services/admin.service';
import { DashboardComponent } from './compenents/login/dashboard/dashboard.component';
import { TicketDeSupportService } from './services/ticket-de-support.service';
import { PanneService } from './services/panne.service';
import { EquipementService } from './services/equipement.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    TechnicianComponent,
    DashboardComponent
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
    AdminService,
    UserService,
    TechnicianService,
    TicketDeSupportService,
    PanneService,
    EquipementService,
    /* {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }, */
   
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
