// ticket-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TicketDeSupportService } from 'src/app/services/ticket-de-support.service';
import { TechnicienITService } from 'src/app/services/technicien-it.service';
import { EtatTicket, TechnicienIT, TicketDeSupport, } from 'src/app/model/global.model';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  tickets: TicketDeSupport[] = [];
  technicians: TechnicienIT[] = [];
  etatTicket = EtatTicket;
  selectedTicket: TicketDeSupport | null = null;
  showUpdatePopup = false;

  constructor(
    private ticketService: TicketDeSupportService,
    private technicienService: TechnicienITService
  ) {}

  ngOnInit(): void {
    this.loadTickets();
    this.loadTechnicians();
  }

  loadTickets(): void {
    this.ticketService.getAllTicketsDeSupport().subscribe(
      (data: TicketDeSupport[]) => this.tickets = data,
      error => console.error('Error fetching tickets:', error)
    );
  }

  loadTechnicians(): void {
    this.technicienService.getAllTechnicienITs().subscribe(
      (data: TechnicienIT[]) => this.technicians = data,
      error => console.error('Error fetching technicians:', error)
    );
  }

  deleteTicket(id: number): void {
    this.ticketService.deleteTicketDeSupport(id).subscribe(
      () => {
        this.loadTickets();
      },
      error => console.error('Error deleting ticket:', error)
    );
  }

  assignTicket(ticketId: number, event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const technicianId = Number(selectElement.value);
    if (technicianId) {
      this.ticketService.assignToTechnician(ticketId, technicianId).subscribe(
        () => {
          this.loadTickets();
        },
        error => console.error('Error assigning ticket:', error)
      );
    }
  }

  openUpdatePopup(ticket: TicketDeSupport): void {
    this.selectedTicket = { ...ticket };
    this.showUpdatePopup = true;
  }

  closeUpdatePopup(): void {
    this.selectedTicket = null;
    this.showUpdatePopup = false;
  }

  updateTicket(): void {
    if (this.selectedTicket) {
       this.ticketService.updateTicket(this.selectedTicket.id, this.selectedTicket).subscribe(
        () => {
          this.loadTickets();
          this.closeUpdatePopup();
        },
        error => console.error('Error updating ticket:', error)
      );
    
    }
  }
}