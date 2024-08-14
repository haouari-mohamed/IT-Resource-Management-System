// technician.component.ts
import { Component, OnInit } from '@angular/core';
import { EtatTicket } from 'src/app/model/global.model';
import { AuthService } from 'src/app/services/auth.service';
import { TechnicianService } from 'src/app/services/technician.service';
import { TechnicienITService } from 'src/app/services/technicien-it.service';
import { TicketDeSupportService } from 'src/app/services/ticket-de-support.service';

@Component({
  selector: 'app-technician',
  templateUrl: './technician.component.html',
  styleUrls: ['./technician.component.css']
})
export class TechnicianComponent implements OnInit {
  assignedTickets: any[] = [];
  currentTechnicianId: number = 1; // This should be set dynamically based on logged-in user
  etatTicketOptions: string[] = Object.values(EtatTicket); // Assuming you have an enum EtatTicket

  constructor(
    private ticketDeSupportService: TicketDeSupportService,
    private technicianService: TechnicienITService
  ) { }

  ngOnInit(): void {
    this.loadDashboardData();
    this.loadAssignedTickets();
  }

  loadDashboardData(): void {
    // Load any other necessary data for the dashboard
  }

  loadAssignedTickets(): void {
    this.technicianService.getAssignedTickets().subscribe(
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
          console.log('Ticket status updated successfully');
          this.loadAssignedTickets(); // Reload the assigned tickets
        },
        error => console.error('Error updating ticket status:', error)
      );
    }
  }

  onStatusChange(event: Event, ticketId: number): void {
    const selectElement = event.target as HTMLSelectElement;
    const newStatus = selectElement.value;
    this.updateTicketStatus(ticketId, newStatus);
  }
}