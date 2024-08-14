import { Component, OnInit } from '@angular/core';
import { EtatTicket } from 'src/app/model/global.model';
import { AdminService } from 'src/app/services/admin.service';
import { EquipementService } from 'src/app/services/equipement.service';
import { PanneService } from 'src/app/services/panne.service';
import { TechnicienITService } from 'src/app/services/technicien-it.service';
import { TicketDeSupportService } from 'src/app/services/ticket-de-support.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stats: any;
  equipements: any[] = [];
  tickets: any[] = [];
  users: any[] = [];
  notifications: any[] = [];
  breakdowns: any[] = [];
  technicians: any[] = [];
  newUser: any = {};
  newEquipment: any = {};
  newBreakdown: any = {};
  selectedTicket: any = null;
  etatTicketOptions = Object.values(EtatTicket);

  constructor(
    private adminService: AdminService,
    private equipementService: EquipementService,
    private panneService: PanneService,
    private technicienITService: TechnicienITService,
    private userService: UserService,
    private ticketDeSupportService: TicketDeSupportService
  ) { }

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
   /*  this.adminService.getDashboardStats().subscribe(
      data => this.stats = data,
      error => console.error('Error fetching dashboard stats:', error)
    ); */
    this.loadEquipments();
    this.loadTickets();
    this.loadUsers();
/*     this.loadNotifications(); */
    this.loadBreakdowns();
    this.loadTechnicians();
  }

  loadEquipments(): void {
    this.equipementService.getAllEquipements().subscribe(
      data => this.equipements = data,
      error => console.error('Error fetching equipments:', error)
    );
  }

  loadTickets(): void {
    this.ticketDeSupportService.getAllTicketsDeSupport().subscribe(
      data => this.tickets = data,
      error => console.error('Error fetching tickets:', error)
    );
  }

  loadUsers(): void {
    this.userService.getAllUtilisateurs().subscribe(
      data => this.users = data,
      error => console.error('Error fetching users:', error)
    );
  }

 /*  loadNotifications(): void {
    this.adminService.getNotificationList().subscribe(
      data => this.notifications = data,
      error => console.error('Error fetching notifications:', error)
    );
  } */

  loadBreakdowns(): void {
    this.panneService.getAllPannes().subscribe(
      data => this.breakdowns = data,
      error => console.error('Error fetching breakdowns:', error)
    );
  }

  loadTechnicians(): void {
    this.technicienITService.getAllTechnicienITs().subscribe(
      data => this.technicians = data,
      error => console.error('Error fetching technicians:', error)
    );
  }

  deleteEquipment(id: number): void {
    this.equipementService.deleteEquipement(id).subscribe(
      () => {
        this.loadEquipments();
      },
      error => console.error('Error deleting equipment:', error)
    );
  }

  deleteTicket(id: number): void {
    this.ticketDeSupportService.deleteTicketDeSupport(id).subscribe(
      () => {
        this.loadTickets();
      },
      error => console.error('Error deleting ticket:', error)
    );
  }

  deletePanne(id: number): void {
    this.panneService.deletePanne(id).subscribe(
      () => {
        this.loadBreakdowns();
      },
      error => console.error('Error deleting breakdown:', error)
    );
  }

  assignTicket(ticketId: number, event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const technicianId = Number(selectElement.value);
    if (technicianId) {
      this.ticketDeSupportService.assignToTechnician(ticketId, technicianId).subscribe(
        () => {
          
          this.loadTickets();
        },
        error => console.error('Error assigning ticket:', error)
      );
    }
  }

  selectTicketForUpdate(ticket: any): void {
    this.selectedTicket = { ...ticket };
  }

  updateTicket(): void {
    if (this.selectedTicket) {
      this.ticketDeSupportService.updateTicket(this.selectedTicket.id, this.selectedTicket).subscribe(
        () => {
          this.loadTickets();
          this.selectedTicket = null;
        },
        error => console.error('Error updating ticket:', error)
      );console.log(this.selectedTicket)
    }
  }

  createUser(): void {
    this.userService.creerUtilisateur(this.newUser).subscribe(
      () => {
        this.loadUsers();
        this.newUser = {};
      },
      error => console.error('Error creating user:', error)
    );console.log("the user creation is working well")
    console.log(this.newUser)
  }

  createEquipment(): void {
    this.equipementService.creerEquipement(this.newEquipment).subscribe(
      () => {
        this.loadEquipments();
        this.newEquipment = {};
      },
      error => console.error('Error creating equipment:', error)
    );console.log("the creation of equipmenet is working well")
    console.log(this.newEquipment)
  }

  createBreakdown(): void {
    this.panneService.creerPanne(this.newBreakdown).subscribe(
      () => {
        this.loadBreakdowns();
        this.newBreakdown = {};
      },
      error => console.error('Error creating breakdown:', error)
    );console.log("you panne creation is working well also ")
  }
}