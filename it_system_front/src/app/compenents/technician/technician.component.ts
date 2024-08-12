// technician.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TicketDeSupportService } from 'src/app/services/ticket-de-support.service';

@Component({
  selector: 'app-technician',
  templateUrl: './technician.component.html'
})
export class TechnicianComponent implements OnInit {
  tickets: any[] = [];
  currentTechnicianId: number;

  constructor(
    private ticketService: TicketDeSupportService,
    private authService: AuthService
  ) {
    // Initialize currentTechnicianId, possibly from AuthService
    this.currentTechnicianId = this.authService.getCurrentUserId();
  }

  ngOnInit() {
  
  }

/*   loadTickets() {
    this.ticketService.getAllTicketsDeSupport().subscribe(
      (data) => this.tickets = data,
      (error) => console.error('Error loading tickets', error)
    );
  }

  assignTicket(ticketId: number) {
    this.ticketService.assignToTechnician(ticketId, this.currentTechnicianId).subscribe(
      () => {
        console.log('Ticket assigned successfully');
        this.loadTickets(); // Reload tickets to reflect changes
      },
      (error) => console.error('Error assigning ticket', error)
    ); */
  }
