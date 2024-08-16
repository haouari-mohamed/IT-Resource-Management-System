import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtatTicket } from 'src/app/model/global.model';
import { AuthService } from 'src/app/services/auth.service';
import { TechnicienITService } from 'src/app/services/technicien-it.service';
import { TicketDeSupportService } from 'src/app/services/ticket-de-support.service';

@Component({
  selector: 'app-technician',
  templateUrl: './technician.component.html',
  styleUrls: ['./technician.component.css']
})
export class TechnicianComponent implements OnInit {
  assignedTickets: any[] = [];
  currentTechnicianId: number = 6; 
  etatTicketOptions: string[] = Object.values(EtatTicket); 

  constructor(
    private ticketDeSupportService: TicketDeSupportService,
    private technicianService: TechnicienITService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAssignedTickets();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); 
  }

  loadAssignedTickets(): void {
    this.technicianService.getAssignedTickets(this.currentTechnicianId).subscribe(
      data => this.assignedTickets = data,
      error => console.error('Error fetching assigned tickets:', error)
    );
  }

  updateTicketStatus(ticketId: number, newStatus: string): void {
    const updatedTicket = this.assignedTickets.find(ticket => ticket.id === ticketId);
    if (updatedTicket) {
      updatedTicket.etat = newStatus;
      this.ticketDeSupportService.updateTicket(ticketId, updatedTicket).subscribe(
        () => {
          console.log('Ticket updated succes');
          this.loadAssignedTickets(); 
        },
        
      );
    }
  }

  onStatusChange(event: Event, ticketId: number): void {
    const selectElement = event.target as HTMLSelectElement;
    const newStatus = selectElement.value;
    this.updateTicketStatus(ticketId, newStatus);
  }
}
